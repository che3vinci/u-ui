export const linearGradientText = (bg: string) => ({
  background: bg,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing,
}: any): any => {
  //TODO: type
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};
