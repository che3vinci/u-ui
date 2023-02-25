import { Dropdown, DropdownProps } from "@cui/ct-floating-ui";
import React from "react";

export type SelectProps<T> = {
  selected?: T;
  selectBox: JSX.Element;
} & { children: JSX.Element } & Omit<DropdownProps, "overlay">;

export const Select = <T,>(props: SelectProps<T>) => {
  const { selectBox, children, ...restProps } = props;
  if (!React.isValidElement(children)) {
    throw new Error("Select children must be a valid react element");
  }

  return (
    <Dropdown overlay={children} {...restProps}>
      {selectBox}
    </Dropdown>
  );
};
