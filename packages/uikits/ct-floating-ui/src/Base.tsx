import { useGId, usePrev } from "@c3/react";
// import { Placement } from "@c3/types";
import { isNullish, toArray } from "@c3/utils";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react-dom-interactions";
import { zoom } from "@u-ui/animation";
import { supportIndivideTransform } from "@u-ui/css";
import React, { useEffect, useState } from "react";

export type Trigger = "click" | "hover" | "focus";
export type FloatingProps = {
  overlay: JSX.Element;
  visible: boolean;
  trigger?: Trigger | Trigger[];
  placement?: Placement;
  onToggle?: (isOpen: boolean) => Promise<void> | void;
  withArrow?: boolean;
  offset?: number; //TODO: support vw, vh?
  flip?: boolean;
  anime?: (
    visible: boolean,
    placement: Placement,
    targets: anime.AnimeParams["targets"]
  ) => void;
} & { children: JSX.Element; as?: any };

export const Floating: React.FC<FloatingProps> = props => {
  const {
    trigger = "click",
    visible = false,
    onToggle,
    overlay: _overlay,
    placement = "bottom",
    offset: _offset = 10,
    flip: _flip = true,
    children,
    anime = animate,
  } = props;
  if (!React.isValidElement(children)) {
    throw new Error("TypeError:children must be reactElement");
  }
  const prev = usePrev(visible);
  const overlayId = useGId();
  const [visibility, setVisibility] = useState("hidden");

  const { x, y, reference, floating, strategy, context } = useFloating({
    open: visible,
    onOpenChange: onToggle,
    middleware: [_flip && flip(), shift(), offset(_offset)],
    whileElementsMounted: autoUpdate,
    placement,
  });
  const triggers = toArray(trigger);

  const click = useClick(context, { enabled: triggers.includes("click") });
  const hover = useHover(context, { enabled: triggers.includes("hover") });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
    hover,
  ]);
  useEffect(() => {
    if (!isNullish(prev) && prev !== visible) {
      setVisibility("visible");
      anime?.(visible, placement, `#${overlayId}`);
    }
  }, [placement, visible, overlayId, prev, anime]);

  const overlay = React.cloneElement(_overlay, {
    style: {
      visibility: visibility,
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
      width: "max-content",
    },
    id: overlayId,
    ref: floating,
    ...getFloatingProps(),
  });

  //@ts-ignore
  const actionBtn = React.cloneElement(children, {
    //@ts-ignore
    ref: reference,
    ...getReferenceProps(),
  });

  return (
    <>
      {actionBtn}
      <FloatingPortal>{overlay}</FloatingPortal>
    </>
  );
};

//=====================================================================================================
// animate
//=====================================================================================================

const animate = (
  visible: boolean,
  placement: Placement,
  targets: anime.AnimeParams["targets"]
) => {
  if (!supportIndivideTransform) {
    console.warn("NOT supportIndivideTransform");
    // return;
  }
  const key = `${placement}-${visible ? "in" : "out"}`;
  zoom[key]({ targets });
};
