import { LoadingOutlined } from "@ant-design/icons";
import { styled } from "@yuejs/react";
import _ from "lodash";
import React, { useCallback, useMemo } from "react";
import { Atomic } from "../Atomic";

export type ButtonProps = {
  loading?: boolean;
  loadingIcon?: JSX.Element;
  preventDefault?: boolean;
  debounce?: number | boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const __Button = styled(
  Atomic,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&[disabled]": {
      cursor: "not-allowed",
    },
  },
  { as: "button" }
);

export const _Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    preventDefault,
    onClick,
    loading,
    loadingIcon,
    children,
    disabled,
    debounce: _debounce = 400,
    ...restProps
  } = props;
  const debounce: number =
    typeof _debounce === "boolean" ? (_debounce ? 400 : 0) : _debounce;

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (preventDefault) {
        e.preventDefault();
      }
      if (loading) {
        return;
      }
      await onClick?.(e);
    },
    [loading, onClick, preventDefault]
  );

  const DebouncedClick = useMemo(
    () =>
      debounce > 0
        ? _.debounce(handleClick, debounce, {
            leading: true,
            trailing: false,
          })
        : handleClick,
    [debounce, handleClick]
  );

  return (
    <__Button
      onClick={DebouncedClick}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading && (loadingIcon || <LoadingOutlined className="loading-icon" />)}
      {children}
    </__Button>
  );
};

export const Button = styled(_Button, {});
