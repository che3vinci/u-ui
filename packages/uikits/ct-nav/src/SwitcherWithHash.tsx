import { useEventListener, useExclusive, useMount } from "@c3/react";
import React from "react";
import { useCallback } from "react";
import { NavItemType, Nav, NavProps } from "./Switcher";

type SwitchWithHashProps<T extends NavItemType> = NavProps<T>;
export const SwitchWithHash = <T extends NavItemType>(
  props: SwitchWithHashProps<T>
) => {
  const { menuConfig, updateConfig } = props;
  const on = useExclusive(menuConfig, "active", updateConfig);
  const switchToHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      on(hash.slice(1));
    }
  }, [on]);

  useEventListener(window, "hashchange", switchToHash);
  useMount(switchToHash);

  return <Nav {...props} />;
};
