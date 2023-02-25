import React from "react";
import { Box } from "./Box";
import { styled } from "@yuejs/react";

//TODO: use `useMediaQuery` to detect mobile
//使用config中的配置来判断是否是移动端，而不是写死的768px
const isMobile = "@media (max-width: 768px)";

/**
 * Responsive
 * column on mobile, row on desktop
 */
export const Responsive = styled(Box, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  [isMobile]: {
    flexDirection: "column",
  },
  variants: {
    fx: {
      dynamic: (fx: string) => ({
        justifyContent: fx,
        [isMobile]: {
          alignItems: fx,
        },
      }),
    },
    fy: {
      dynamic: (fy: string) => ({
        alignItems: fy,
        [isMobile]: {
          justifyContent: fy,
        },
      }),
    },
  },
});
