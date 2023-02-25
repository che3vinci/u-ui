import { CSSProperties } from "@yuejs/core";
import { styled } from "@yuejs/react";
import { Box } from "./Box";
import { vgap } from "@cui/css";

export const Col = styled(
  Box,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    variants: {
      gap: {
        //TODO:使用@supports来判断是否支持flex中使用gap属性
        dynamic: (value: CSSProperties["gap"]) => ({
          ...vgap(value),
          // gap: value,
        }),
      },
      fx: {
        dynamic: (fx: CSSProperties["alignItems"]) => ({
          alignItems: fx,
        }),
      },
      fy: {
        dynamic: (fy: CSSProperties["justifyContent"]) => ({
          justifyContent: fy,
        }),
      },
    },
  },
  { as: "u-col" }
);
