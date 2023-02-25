import { mask } from "@cui/css";
import { Fixed, Stack } from "@cui/layout";
import { CSSPropertiesComplex } from "@yuejs/core";
import { styled } from "@yuejs/react";
import React from "react";

export type ModalProps = {
  visible: boolean;
  closeBtn?: JSX.Element;
  okBtn?: JSX.Element;
  cancelBtn?: JSX.Element;
  body: JSX.Element;
  css: CSSPropertiesComplex;
} & React.HTMLAttributes<HTMLDivElement>;

const __Mask = styled(Fixed, {
  opacity: 0,
  pointerEvents: "none",
  zIndex: 100,
  ...mask,
});

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const { visible, closeBtn, body, okBtn, cancelBtn, ...restProps } = props;
    return (
      <__Mask data-visible={visible} {...restProps} ref={ref}>
        <Stack as="u-modal" body={<body.type {...body.props} as="u-body" />}>
          {closeBtn}
          {okBtn}
          {cancelBtn}
        </Stack>
      </__Mask>
    );
  }
);
Modal.displayName = "Modal";
