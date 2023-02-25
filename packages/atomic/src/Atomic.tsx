import { styled } from "@yuejs/react";
export const Atomic = styled("div", {
  boxSizing: "border-box",
  p: 0,
  m: 0,
  variants: {
    shape: {
      round: {
        borderRadius: "100000px",
      },
      rect: {
        borderRadius: 0,
      },
    },
  },
});
