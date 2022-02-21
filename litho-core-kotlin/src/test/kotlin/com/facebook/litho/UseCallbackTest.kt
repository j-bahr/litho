/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho

import androidx.test.ext.junit.runners.AndroidJUnit4
import com.facebook.litho.core.height
import com.facebook.litho.core.width
import com.facebook.litho.testing.LithoViewRule
import com.facebook.litho.testing.setRoot
import com.facebook.litho.view.onClick
import com.facebook.litho.view.viewTag
import com.facebook.litho.widget.collection.LazyList
import org.assertj.core.api.Assertions.assertThat
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

/** Tests for [useCallback] and capturing of props/state within collections lambdas. */
@RunWith(AndroidJUnit4::class)
class UseCallbackTest {

  @Rule @JvmField val lithoViewRule = LithoViewRule()

  @Test
  fun useCallbackWithCollection_whenUseCallbackCapturesState_stateInCallbackIsUpToDate() {
    class CollectionWithSelectedRows(
        private val data: List<Int>,
        private val onSelectedChanged: (List<Int>) -> Unit
    ) : KComponent() {
      override fun ComponentScope.render(): Component? {
        val selected = useState { listOf<Int>() }

        useEffect(selected) {
          onSelectedChanged(selected.value)
          null
        }

        val clickCallback = useCallback { selectedItem: Int ->
          selected.updateSync(selected.value + listOf(selectedItem))
        }

        return LazyList {
          data.forEach { item ->
            child(
                id = item,
                component =
                    CollectionRow(
                        style =
                            Style.viewTag("item_$item").onClick { clickCallback.current(item) }))
          }
        }
      }
    }

    val selectionEvents = mutableListOf<List<Int>>()
    val lithoView =
        lithoViewRule.render(widthPx = 1000, heightPx = 1000) {
          CollectionWithSelectedRows(
              data = listOf(1, 2, 3, 4, 5),
              onSelectedChanged = { list -> selectionEvents.add(list) })
        }

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    assertThat(selectionEvents).containsExactly(listOf(), listOf(1), listOf(1, 2))
  }

  @Test
  fun useCallbackWithCollection_whenUseCallbackCapturesProps_propsAreUpToDate() {
    class CollectionWithUseCallback(
        private val data: List<Int>,
        private val rowClickedTag: String,
        private val onRowClick: (String) -> Unit
    ) : KComponent() {
      override fun ComponentScope.render(): Component? {
        val clickCallback = useCallback { clickEvent: ClickEvent -> onRowClick(rowClickedTag) }
        return LazyList {
          data.forEach { item ->
            child(
                id = item,
                component =
                    CollectionRow(
                        style = Style.viewTag("item_$item").onClick { clickCallback.current(it) }))
          }
        }
      }
    }

    val rowClickedEvents = mutableListOf<String>()
    val lithoView =
        lithoViewRule.render(widthPx = 1000, heightPx = 1000) {
          CollectionWithUseCallback(
              data = listOf(1, 2, 3, 4, 5),
              rowClickedTag = "setRoot1",
              onRowClick = { data -> rowClickedEvents.add(data) })
        }

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    lithoView.setRoot(
        CollectionWithUseCallback(
            data = listOf(1, 2, 3, 4, 5),
            rowClickedTag = "setRoot2",
            onRowClick = { data -> rowClickedEvents.add(data) }))
    lithoViewRule.idle()

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    assertThat(rowClickedEvents).containsExactly("setRoot1", "setRoot1", "setRoot2", "setRoot2")
  }

  /**
   * This isn't exactly desired behavior, but it's behavior we don't want to accidentally change.
   * Because onIsSameItem/onIsSameContent return true, the second click on item_2 invokes a callback
   * which has captured the initial state and not the updated state.
   *
   * See [useCallbackWithCollection_whenUseCallbackCapturesState_stateInCallbackIsUpToDate] for how
   * to achieve the desired behavior correctly via [useCallback].
   */
  @Test
  fun collection_whenCallbackCapturesState_stateInCallbackIsStale() {
    class CollectionWithSelectedRows(
        private val data: List<Int>,
        private val onSelectedChanged: (List<Int>) -> Unit
    ) : KComponent() {
      override fun ComponentScope.render(): Component? {
        val selected = useState { listOf<Int>() }

        useEffect(selected) {
          onSelectedChanged(selected.value)
          null
        }

        return LazyList {
          data.forEach { item ->
            child(
                id = item,
                component =
                    CollectionRow(
                        style =
                            Style.viewTag("item_$item").onClick {
                              selected.updateSync(selected.value + listOf(item))
                            }))
          }
        }
      }
    }

    val selectionEvents = mutableListOf<List<Int>>()
    val lithoView =
        lithoViewRule.render(widthPx = 1000, heightPx = 1000) {
          CollectionWithSelectedRows(
              data = listOf(1, 2, 3, 4, 5),
              onSelectedChanged = { list -> selectionEvents.add(list) })
        }

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    // If we had our desired behavior (see docs on this test case), the assertion would instead be:
    //   assertThat(selectionEvents).containsExactly(listOf(), listOf(1), listOf(1, 2))
    // TODO: Fix up this test in next diff
    assertThat(selectionEvents).containsExactly(listOf(), listOf(1), listOf(1, 2))
  }

  /**
   * This ends up showing correct behavior since the updateSync lambda will receive the latest state
   * value at the time its invoked (i.e. it does not use captured state).
   */
  @Test
  fun collection_whenCallbackUsesLambdaStateUpdate_stateInCallbackIsUpToDate() {
    class CollectionWithSelectedRows(
        private val data: List<Int>,
        private val onSelectedChanged: (List<Int>) -> Unit
    ) : KComponent() {
      override fun ComponentScope.render(): Component? {
        val selected = useState { listOf<Int>() }

        useEffect(selected) {
          onSelectedChanged(selected.value)
          null
        }

        return LazyList {
          data.forEach { item ->
            child(
                id = item,
                component =
                    CollectionRow(
                        style =
                            Style.viewTag("item_$item").onClick {
                              selected.updateSync { oldList -> oldList + listOf(item) }
                            }))
          }
        }
      }
    }

    val selectionEvents = mutableListOf<List<Int>>()
    val lithoView =
        lithoViewRule.render(widthPx = 1000, heightPx = 1000) {
          CollectionWithSelectedRows(
              data = listOf(1, 2, 3, 4, 5),
              onSelectedChanged = { list -> selectionEvents.add(list) })
        }

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    assertThat(selectionEvents).containsExactly(listOf(), listOf(1), listOf(1, 2))
  }

  /**
   * This isn't exactly desired behavior, but it's behavior we don't want to accidentally change.
   * Because onIsSameItem/onIsSameContent return true, the second pair of clicks both use the stale
   * value of `clickEventData` even after the root has been updated.
   *
   * See [useCallbackWithCollection_whenUseCallbackCapturesProps_propsAreUpToDate] for how to
   * achieve the desired behavior correctly via [useCallback].
   */
  @Test
  fun collection_whenCallbackCapturesProps_propInCallbackIsStale() {
    class CollectionWithSelectedRows(
        private val data: List<Int>,
        private val rowClickedTag: String,
        private val onRowClick: (String) -> Unit
    ) : KComponent() {
      override fun ComponentScope.render(): Component? {
        return LazyList {
          data.forEach { item ->
            child(
                id = item,
                component =
                    CollectionRow(
                        style = Style.viewTag("item_$item").onClick { onRowClick(rowClickedTag) }))
          }
        }
      }
    }

    val onRowClickEvents = mutableListOf<String>()
    val lithoView =
        lithoViewRule.render(widthPx = 1000, heightPx = 1000) {
          CollectionWithSelectedRows(
              data = listOf(1, 2, 3, 4, 5),
              rowClickedTag = "setRoot1",
              onRowClick = { data -> onRowClickEvents.add(data) })
        }

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    lithoView.setRoot(
        CollectionWithSelectedRows(
            data = listOf(1, 2, 3, 4, 5),
            rowClickedTag = "setRoot2",
            onRowClick = { data -> onRowClickEvents.add(data) }))
    lithoViewRule.idle()

    lithoViewRule.act(lithoView) { clickOnTag("item_1") }
    lithoViewRule.act(lithoView) { clickOnTag("item_2") }

    // If we had our desired behavior (see docs on this test case), the assertion would instead be:
    //   assertThat(onRowClickEvents)
    //       .containsExactly("setRoot1", "setRoot1", "setRoot2", "setRoot2")
    // TODO: Fix up this test in next diff
    assertThat(onRowClickEvents).containsExactly("setRoot1", "setRoot1", "setRoot2", "setRoot2")
  }
}

private class CollectionRow(val style: Style) : KComponent() {
  override fun ComponentScope.render(): Component? {
    return Row(style = Style.width(100.px).height(100.px) + style)
  }
}
