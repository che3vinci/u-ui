import { styled } from "@yuejs/react";
import { Atomic } from "./Atomic";
export type SpaceProps = {
  size: number;
};

export const Space = styled(Atomic, {
  display: "block",
  flexShrink: 0,
  variants: {
    size: {
      dynamic(size) {
        return { w: size, h: size };
      },
    },
  },
});
