import { styled, StyledComponent } from "@yuejs/react";
import React from "react";
import ReactDOM from "react-dom";
import { Box } from "./Box";

const __Fixed = styled(Box, { position: "fixed" }, { as: "u-fixed" });

export const Fixed = React.forwardRef((props, ref) => {
  const portal = ReactDOM.createPortal(
    <__Fixed {...props} ref={ref} />,
    document.body
  );
  return portal;
}) as StyledComponent;

Fixed.displayName = "Fixed";
