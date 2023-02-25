import { assert } from "@c3/utils";
import { fades, zoom } from "@cui/animation";

export const animate = (visible: boolean, mask: HTMLElement) => {
  assert(!!mask, "mask is required");
  const key: "in" | "out" = visible ? "in" : "out";
  const modal = mask.querySelector("u-modal") as HTMLElement;
  zoom[`center-${key}`]({ targets: modal });
  fades[key]({ targets: mask });
  mask.style.pointerEvents = visible ? "auto" : "none";
};
