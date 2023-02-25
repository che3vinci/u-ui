import { useExclusive } from "@c3/react";
import { IDable } from "@c3/types";
import { Color } from "@c3/utils";
import React, { useCallback } from "react";
import { Box as _Box } from "./Box";
import { styled, StyledComponent } from "@yuejs/react";
import { CSSProperties } from "@yuejs/core";

export type BaseListItemType = IDable & {
  active?: boolean;
  renderItem?: <U extends BaseListItemType>(
    e: U,
    idx: number
  ) => JSX.Element | null;
};

const __List = styled(
  _Box,
  {
    listStyle: "none",
    flexWrap: "nowrap",
    variants: {
      direction: {
        column: {
          flexDirection: "column",
          alignItems: "stretch", //fx
        },
        row: {
          flexDirection: "row",
        },
      },
    },
  },
  { as: "u-ul" }
);

export type ListProps<T extends BaseListItemType> = {
  data: T[];
  direction?: "row" | "column";
  renderItem?: (item: T, idx: number) => JSX.Element;
  updateData: (newData: T[], prev: T[]) => void;
  onClick?: (e: MouseEvent) => void;
} & {
  divider?: Color;
  gap?: CSSProperties["gap"];
  className?: string;
};

export const List = React.forwardRef<
  HTMLUListElement,
  ListProps<BaseListItemType>
>((props, ref) => {
  const {
    data,
    renderItem,
    direction = "column",
    updateData,
    onClick: _onClick,
    ...restProps
  } = props;
  const on = useExclusive(data, "active", updateData);

  const onClick = useCallback(
    async (e: MouseEvent) => {
      await _onClick?.(e);
    },
    [_onClick]
  );

  return (
    <__List onClick={onClick} direction={direction} {...restProps} ref={ref}>
      {data.map((e, idx: number) => {
        const item = e.renderItem?.(e, idx) || renderItem?.(e, idx) || <></>;
        if (!React.isValidElement(item)) {
          return item;
        }
        return React.cloneElement(item, {
          //@ts-ignore
          onClick: async (event: React.MouseEvent) => {
            on(e.id);
            //@ts-ignore
            await item.props.onClick?.(event);
          },
          "data-active": e.active,
        });
      })}
    </__List>
  );
}) as StyledComponent;

List.displayName = "List";
