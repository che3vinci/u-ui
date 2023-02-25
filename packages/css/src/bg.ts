import { CSSProperties } from "@yuejs/core";

export const bgImg = (url: string, css: CSSProperties = {}): CSSProperties => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...css,
});
