import { styled } from "@yuejs/react";
import { Box } from "./Box";
import { rgap } from "@cui/css";

export const Row = styled(
  Box,
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    variants: {
      gap: {
        dynamic: (gap: number) => ({ ...rgap(gap) }),
      },
      fx: {
        dynamic: (fx: string) => ({
          justifyContent: fx,
        }),
      },
      fy: {
        dynamic: (fy: string) => ({
          alignItems: fy,
        }),
      },
    },
  },
  { as: "u-row" }
);
