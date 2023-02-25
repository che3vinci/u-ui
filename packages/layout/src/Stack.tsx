import { styled, StyledComponent } from "@yuejs/react";
import { CSSPropertiesComplex } from "@yuejs/core";
import React from "react";
import { Box } from "./Box";

export type StackProps = {
  body: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  css?: CSSPropertiesComplex;
  as?: string;
} & { children?: React.ReactElement[] };

const __Stack = styled(
  Box,
  {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    w: "max-content",
    "& > :not(:first-child)": {
      left: 0,
      top: 0,
      position: "absolute",
    },
  },
  { as: "u-stack" }
);

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { body, children, ...restProps } = props;
    return (
      <__Stack {...restProps} ref={ref}>
        {body}
        {children}
      </__Stack>
    );
  }
) as StyledComponent;

Stack.displayName = "Stack";
// export const Stack = styled(_Stack, {});
