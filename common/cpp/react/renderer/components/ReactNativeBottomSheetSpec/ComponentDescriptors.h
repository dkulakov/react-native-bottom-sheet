#pragma once

#include "ShadowNodes.h"
#include <react/renderer/core/ConcreteComponentDescriptor.h>

namespace facebook::react {

class BottomSheetViewComponentDescriptor final
    : public ConcreteComponentDescriptor<BottomSheetViewShadowNode> {
 public:
  using ConcreteComponentDescriptor::ConcreteComponentDescriptor;

  State::Shared createInitialState(
      const Props::Shared& /*props*/,
      const ShadowNodeFamily::Shared& family) const override {
    return std::make_shared<BottomSheetViewShadowNode::ConcreteState>(
        std::make_shared<const BottomSheetViewState>(),
        family);
  }
};

} // namespace facebook::react
