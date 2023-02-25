import { CSSPropertiesComplex } from "@yuejs/core";
import { Direction } from "@c3/types";
import { CSSProperties } from "@yuejs/core";
import { getPopoverPos } from "./layout/placement";

export const arrow = (
  direction: "top" | "right" | "bottom" | "left"
): CSSProperties => {
  let polygon;
  switch (direction) {
    case "top":
      polygon = "50% 0%, 0% 100%, 100% 100%";
      break;
    case "bottom":
      polygon = "0% 0%, 50% 100%, 100% 0%";
      break;
    case "left":
      polygon = "100% 0%, 0% 50%, 100% 100%";
      break;
    case "right":
      polygon = "0% 0%, 0% 100%, 100% 50%";
      break;
    default:
      throw new Error(
        "TypeError:direction must be one of top, bottom, left, right"
      );
  }
  return {
    clipPath: `polygon(${polygon})`,
  };
};

//=====================================================================================================
// pseudoArrow:
// color of border of arrow is same as the border color of parent element
//=====================================================================================================

export const pseudoArrow = (
  direction: Direction,
  width: number,
  height: number,
  css?: CSSProperties
): CSSPropertiesComplex => {
  const { border, ...restCss } = css || {};
  if (!border) {
    return {
      _before: {
        w: width,
        h: height,
        ...getPopoverPos(direction),
        ...arrow(direction),
        background: "inherit",
        ...css,
      },
    };
  }

  const res = (border as string).match(
    /(?<size>\d+?)p?x? (?<type>\w+?) (?<color>.+)/
  );
  // only support solid
  if (!res) {
    throw new Error(`invalid border: ${border}`);
  }
  //@ts-ignore
  const { size = 1, color } = res.groups;
  const w = width - +size - 1;
  const h = height - +size - 1;
  return {
    _before: {
      w: width,
      h: height,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: color,
      ...restCss,
    },
    _after: {
      w: w,
      h: h,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: "inherit",
      ...restCss,
    },
  };
};
