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

package com.facebook.samples.litho.previews

import com.facebook.litho.Column
import com.facebook.litho.Component
import com.facebook.litho.ComponentContext
import com.facebook.litho.ComponentScope
import com.facebook.litho.KComponent
import com.facebook.litho.kotlin.widget.Text
import com.facebook.samples.litho.kotlin.animations.animatedbadge.AnimatedBadgeKotlin

/* Litho docs: Litho Android Studio UI Preview  */
class SamplesComponentPreviews {

  fun preview_AnimatedBadgeKotlin(c: ComponentContext): Component = AnimatedBadgeKotlin()

  fun preview_TryitComponent(c: ComponentContext): Component = TryitComponent()
}

/* Works with dependencies present in the app */
class TryitComponent : KComponent() {
  override fun ComponentScope.render(): Component {
    return Column { child(Text(text = "Hello")) }
  }
}
