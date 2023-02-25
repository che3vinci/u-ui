import { Atomic } from "@cui/atomic";
import { styled } from "@yuejs/react";

export const Box = styled(
  Atomic,
  {
    display: "flex",
    variants: {
      dbg: {
        true: {
          "&,& *": {
            outline: "1px solid rgba(220, 108, 108, 0.5)",
          },
        },
      },
    },
  },
  { as: "u-box" }
);
Box.displayName = "Box";
