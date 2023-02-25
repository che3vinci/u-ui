import { CSSProperties } from "@yuejs/core";

export const row = (
  fx: CSSProperties["justifyContent"] = "flex-start",
  fy: CSSProperties["alignItems"] = "center"
): CSSProperties => ({
  display: "flex",
  alignItems: fy,
  justifyContent: fx,
  flexWrap: "nowrap",
});
