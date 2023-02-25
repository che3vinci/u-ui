import { Text } from "@cui/atomic";
import React from "react";
import { useState } from "react";
import { MenuConfig, NavItemType, Nav } from "../src/Switcher";
export default {
  component: Nav,
  title: "uikits/Nav",
};

type Item = {
  title: string;
  to: string;
  active: boolean;
} & NavItemType;

const config: MenuConfig<Item> = [
  {
    id: "1",
    title: "name1",
    to: "/account#profile",
    active: true,
    renderContent: () => <Text>content1</Text>,
  },
  {
    id: "2",
    title: "name2",
    to: "/account#222",
    active: false,
    renderContent: () => <Text>content2</Text>,
  },
  {
    id: "3",
    title: "name3",
    to: "/account#222",
    active: false,
    renderContent: () => <Text>content3</Text>,
  },
  {
    id: "4",
    title: "name4",
    to: "/account#2222",
    active: false,
    renderContent: () => <Text>content4</Text>,
  },
];

const SwitcherApp = (props: any): JSX.Element => {
  const [menuconfig, setMenuConfig] = useState(config);
  return (
    <Nav
      menuConfig={menuconfig}
      updateConfig={setMenuConfig}
      renderItem={(e: Item) => <Text>{e.title}</Text>}
      css={{ "u-nav": { border: "1px solid red", gap: 10 } }}
      {...props}
    />
  );
};

export const HoriontalSwitcher = () => (
  <SwitcherApp direction="row"></SwitcherApp>
);
export const VerticalSwitcher = () => (
  <SwitcherApp direction="column"></SwitcherApp>
);
