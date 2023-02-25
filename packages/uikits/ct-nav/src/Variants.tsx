import { NavItemType, Nav, NavProps } from "./Switcher";

export const SideBar = <T extends NavItemType>(
  props: Omit<NavProps<T>, "direction">
) => <Nav direction="row" {...props} />;

export const Menus = Nav;
export const Tabs = <T extends NavItemType>(
  props: Omit<NavProps<T>, "direction">
) => <Nav direction="column" {...props} />;
