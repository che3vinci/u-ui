import { CSSProperties } from "@yuejs/core";

export const col = (
  fx: CSSProperties["alignItems"] = "flex-start",
  fy: CSSProperties["justifyContent"] = "flex-start"
): CSSProperties => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: fx,
    justifyContent: fy,
  };
};
