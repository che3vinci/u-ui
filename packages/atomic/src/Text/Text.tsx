import { styled } from "@yuejs/react";
import { linearGradientText } from "@cui/css";
import { Atomic } from "../Atomic";

export const Text = styled(
  Atomic,
  {
    variants: {
      gradient: {
        dynamic(color: string) {
          return linearGradientText(color);
        },
      },
      rows: {
        dynamic(rows: number) {
          return {
            display: "-webkit-box",
            WebkitLineClamp: rows,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            wordBreak: rows == 1 ? "break-all" : "normal",
          };
        },
      },
    },
  },
  { as: "p" }
);
