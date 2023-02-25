import { Placement } from "@floating-ui/react-dom-interactions";
import { slides } from "@u-ui/animation";
import React from "react";
import { Floating, FloatingProps } from "./Base";

export type DropdownProps = Omit<FloatingProps, "visible">;

export const Dropdown: React.FC<DropdownProps> = props => {
  const { overlay: _overlay, children, onToggle, ...restProps } = props;
  const [visible, setVisible] = React.useState(false);

  if (!React.isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  const overlay = React.cloneElement(_overlay, {
    onClick: async (e: React.MouseEvent) => {
      setVisible(false); //disappear when selected
      onToggle?.(false);
      await _overlay.props.onClick?.(e);
    },
  });

  return (
    <Floating
      visible={visible}
      trigger="click"
      onToggle={async (isOpen: boolean) => {
        await onToggle?.(isOpen);
        setVisible(isOpen);
      }}
      placement={"bottom"}
      anime={animate}
      flip={false}
      overlay={overlay}
      {...restProps}
    >
      {children}
    </Floating>
  );
};

//================================================================================================
// animate
//================================================================================================

function animate(
  visible: boolean,
  placement: Placement,
  targets: anime.AnimeParams["targets"]
) {
  // if (!supportIndivideTransform) {
  // return;
  // }
  const key = `bottom-${visible ? "in" : "out"}`;
  //@ts-ignore
  slides[key]({ targets });
}
