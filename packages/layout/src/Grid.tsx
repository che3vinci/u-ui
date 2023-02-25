import { Props, styled, StyledComponent } from "@yuejs/react";
import { forwardRef, HTMLAttributes } from "react";
import { BaseListItemType } from "./List";

const __Grid = styled("u-grid", {
  display: "grid",
  placeContent: "center",
});

export type GridProps<T extends BaseListItemType = any> = {
  data: T[];
  renderItem?: (item: T, idx: number) => JSX.Element;
};

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { data, renderItem, ...restProps } = props;
  return (
    <__Grid {...restProps} ref={ref}>
      {data.map((item, index) => {
        return (
          renderItem?.(item, index) || item.renderItem?.(item, index) || <></>
        );
      })}
    </__Grid>
  );
}) as StyledComponent;

Grid.displayName = "Grid";
