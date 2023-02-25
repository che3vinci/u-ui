import { CSSProperties } from "@yuejs/core";

export const toggleDisplay = (show: boolean): CSSProperties => ({
  display: show ? "flex" : "none",
});

export const hidden: CSSProperties = {
  display: "none",
};

export const toggleVisibility = (visibility: boolean): CSSProperties => ({
  visibility: visibility ? "visible" : "hidden",
});
