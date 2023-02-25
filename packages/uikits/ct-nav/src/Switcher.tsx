import { noop } from "@c3/utils";
import { hidden } from "@cui/css";
import { BaseListItemType, Col, List, Row } from "@cui/layout";
import React, { useMemo } from "react";
import { anti } from "./util";

export type NavItemType = {
  active: boolean;
  renderContent?: <U>(item: U) => React.ReactNode;
} & BaseListItemType;

export type MenuConfig<T extends NavItemType> = T[];

export type NavProps<T extends NavItemType> = {
  direction: "row" | "column";
  menuConfig: MenuConfig<T>;
  updateConfig: (config: MenuConfig<T>) => void;
  renderItem: (item: T) => React.ReactNode;
  renderContent?: (item: T) => React.ReactNode;
};

//TODO:支持hash跳转
export const Nav = <T extends NavItemType>(props: NavProps<T>) => {
  const {
    menuConfig,
    updateConfig,
    direction,
    renderItem,
    renderContent,
    ...restProps
  } = props;
  const Layout = direction === "row" ? Row : Col;
  const nav = useMemo(
    () => (
      <List
        as="u-nav"
        data={menuConfig}
        direction={anti(direction)}
        renderItem={(e: T, idx: number) => {
          return e.renderItem?.(e, idx) || renderItem?.(e) || <></>;
        }}
        updateData={updateConfig}
      />
    ),
    [direction, menuConfig, renderItem, updateConfig]
  );

  const content = useMemo(() => {
    return (
      <List
        data={menuConfig}
        direction={anti(direction)}
        renderItem={(e: T) =>
          e.renderContent?.(e) || renderContent?.(e) || <></>
        }
        css={{ "&>:not([data-active=\"true\"])": { ...hidden } }}
        updateData={noop}
      />
    );
  }, [direction, menuConfig, renderContent]);

  return (
    <Layout as="u-switcher" {...restProps}>
      {nav}
      {content}
    </Layout>
  );
};
