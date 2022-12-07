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

package com.facebook.litho;

import static com.facebook.litho.ComponentTree.SIZE_UNINITIALIZED;

import androidx.annotation.Nullable;
import com.facebook.litho.config.ComponentsConfiguration;
import com.facebook.litho.stats.LithoStats;

public class RenderTreeFuture extends TreeFuture<ResolveResult> {
  private final ComponentContext mComponentContext;
  private final Component mComponent;
  private final TreeState mTreeState;
  private final @Nullable LithoNode mCurrentRootNode;
  private final @Nullable PerfEvent mPerfEvent;
  private final int mResolveVersion;

  // TODO(T137275959): Refactor sync render logic to remove sizes from resolved tree future
  @Deprecated private final int mSyncWidthSpec;
  @Deprecated private final int mSyncHeightSpec;

  // Only needed for resume logic.
  private @Nullable RenderStateContext mRenderStateContextForResume;

  public RenderTreeFuture(
      final ComponentContext c,
      final Component component,
      final TreeState treeState,
      final @Nullable LithoNode currentRootNode,
      final @Nullable PerfEvent perfEvent,
      final int resolveVersion,
      final boolean useCancellableFutures) {
    this(
        c,
        component,
        treeState,
        currentRootNode,
        perfEvent,
        resolveVersion,
        useCancellableFutures,
        SIZE_UNINITIALIZED,
        SIZE_UNINITIALIZED);
  }

  /**
   * TODO(T137275959)
   *
   * @deprecated Refactor sync render logic to remove sizes from resolved tree future
   */
  @Deprecated
  public RenderTreeFuture(
      final ComponentContext c,
      final Component component,
      final TreeState treeState,
      final @Nullable LithoNode currentRootNode,
      final @Nullable PerfEvent perfEvent,
      final int resolveVersion,
      final boolean useCancellableFutures,
      final int syncWidthSpec,
      final int syncHeightSpec) {
    super(useCancellableFutures);
    mComponentContext = c;
    mComponent = component;
    mTreeState = treeState;
    mCurrentRootNode = currentRootNode;
    mPerfEvent = perfEvent;
    mResolveVersion = resolveVersion;
    mSyncWidthSpec = syncWidthSpec;
    mSyncHeightSpec = syncHeightSpec;

    // Allow interrupt to happen during tryRegisterForResponse when config is enabled.
    mEnableEarlyInterrupt = ComponentsConfiguration.isInterruptEarlyWithSplitFuturesEnabled;
  }

  @Override
  protected ResolveResult calculate() {
    LithoStats.incrementResolveCount();

    final RenderStateContext rsc =
        new RenderStateContext(
            new MeasuredResultCache(),
            mTreeState,
            mResolveVersion,
            this,
            mCurrentRootNode,
            mPerfEvent);

    final @Nullable CalculationStateContext previousStateContext =
        mComponentContext.getCalculationStateContext();

    final @Nullable LithoNode node;
    try {
      mComponentContext.setRenderStateContext(rsc);
      node = ResolvedTree.createResolvedTree(rsc, mComponentContext, mComponent);
    } finally {
      mComponentContext.setCalculationStateContext(previousStateContext);
    }

    if (rsc.isLayoutInterrupted()) {
      mRenderStateContextForResume = rsc;
    } else {
      rsc.getCache().freezeCache();
    }

    return new ResolveResult(
        node,
        mComponentContext,
        mComponent,
        rsc.getCache(),
        mTreeState,
        rsc.isLayoutInterrupted(),
        mResolveVersion);
  }

  @Override
  protected ResolveResult resumeCalculation(ResolveResult partialResult) {

    LithoStats.incrementResumeCount();

    if (!partialResult.isPartialResult) {
      throw new IllegalStateException("Cannot resume a non-partial result");
    }

    if (partialResult.node == null) {
      throw new IllegalStateException("Cannot resume a partial result with a null node");
    }

    if (mRenderStateContextForResume == null) {
      throw new IllegalStateException("RenderStateContext cannot be null during resume");
    }

    final @Nullable CalculationStateContext previousStateContext =
        mComponentContext.getCalculationStateContext();

    final @Nullable LithoNode node;
    try {
      mComponentContext.setRenderStateContext(mRenderStateContextForResume);
      node = ResolvedTree.resumeResolvingTree(mRenderStateContextForResume, partialResult.node);
    } finally {
      mComponentContext.setCalculationStateContext(previousStateContext);
    }

    mRenderStateContextForResume.getCache().freezeCache();
    mRenderStateContextForResume = null;

    return new ResolveResult(
        node,
        mComponentContext,
        partialResult.component,
        partialResult.consumeCache(),
        partialResult.treeState,
        false,
        mResolveVersion);
  }

  @Override
  public boolean isEquivalentTo(TreeFuture that) {
    if (!(that instanceof RenderTreeFuture)) {
      return false;
    }

    final RenderTreeFuture thatRtf = (RenderTreeFuture) that;

    if (mComponent.getId() != thatRtf.mComponent.getId()) {
      return false;
    }

    if (mComponentContext.getTreeProps() != thatRtf.mComponentContext.getTreeProps()) {
      return false;
    }

    // TODO(T137275959): delete on refactor
    if (mSyncWidthSpec != thatRtf.mSyncWidthSpec) {
      return false;
    }

    // TODO(T137275959): delete on refactor
    if (mSyncHeightSpec != thatRtf.mSyncHeightSpec) {
      return false;
    }

    return true;
  }
}
