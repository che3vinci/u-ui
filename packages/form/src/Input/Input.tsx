import { styled } from "@yuejs/react";
import { Row } from "@u-ui/layout";
import React, { ForwardRefRenderFunction } from "react";
import { _Input as __Input } from "./_Input";

export type InputProps = {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  allowClear?: boolean;
  status?: "warning" | "error" | "success";
} & JSX.IntrinsicElements["input"];

const __Row = styled(Row, {
  "& > input": {
    h: "100%",
    flexGrow: 1,
    background: "transparent",
    outline: "none",
    border: "none", //TODO:precedur style order.fuck . add :where() to solve this
  },
  "&:focus-within": {
    // border: '1px solid $gray600',
  },
  "&:focus-within input": {},
  "&[disabled]": {
    cursor: "not-allowed",
  },
  "&[disabled] input": {
    cursor: "not-allowed",
  },
});

const _Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { prefix, suffix, className, ...restProps } = props;

  return (
    <__Row className={className} disabled={restProps.disabled}>
      {prefix}
      <__Input
        {...restProps}
        ref={ref}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key === "Enter" && e.currentTarget.blur();
        }}
      />
      {suffix}
    </__Row>
  );
};
export const Input = React.forwardRef(_Input);
