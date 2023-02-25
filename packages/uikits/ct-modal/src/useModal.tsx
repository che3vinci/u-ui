import { useSwitch, useUnmount } from "@c3/react";
import { Fn } from "@c3/types";
import React, { useCallback, useMemo, useRef } from "react";
import { Modal, ModalProps } from "./Modal";
import { animate } from "./utils";

export const useModal = (
  props: Omit<ModalProps, "visible" | "onClose" | "onCancel" | "onOK">,
  options: {
    afterDisappear?: Fn;
    beforeAppear?: Fn;
    useAnimation?: boolean;
  } = {}
) => {
  const {
    okBtn: _okBtn,
    cancelBtn: _cancelBtn,
    closeBtn: _closeBtn,
    ...restProps
  } = props;
  const { afterDisappear, beforeAppear, useAnimation = true } = options;
  const [visible, _on, _off] = useSwitch(false);
  const ref = useRef<HTMLDivElement>(null);

  const off = useCallback(async () => {
    if (!visible) {
      console.warn(
        "visible is false, but try to close it. \n there must be some bug here"
      );
      // return;
    }
    // assert(!!ref.current);
    ref.current && useAnimation && animate(false, ref.current);
    await _off();
    await afterDisappear?.();
    document.body.style.overflow = "visible"; //FIXME: restore the value,(should keep the value before modal show)
  }, [visible, useAnimation, _off, afterDisappear]);

  const on = useCallback(async () => {
    if (visible) {
      return;
    }
    await beforeAppear?.();
    _on();
    // assert(!!ref.current);
    ref.current && useAnimation && animate(true, ref.current);
    document.body.style.overflow = "hidden";
  }, [visible, beforeAppear, _on, useAnimation]);

  useUnmount(() => {
    _off();
    document.body.style.overflow = "visible";
  });

  const modal = useMemo(() => {
    const closeBtn =
      _closeBtn &&
      React.cloneElement(_closeBtn, {
        onClick: async <T,>(e: React.MouseEvent<T>) => {
          await _closeBtn.props.onClick?.(e);
          await off();
        },
      });
    const okBtn =
      _okBtn &&
      React.cloneElement(_okBtn, {
        onClick: async <T extends Element>(e: React.MouseEvent<T>) => {
          await _okBtn.props.onClick?.(e);
          await off();
        },
      });
    const cancelBtn =
      _cancelBtn &&
      React.cloneElement(_cancelBtn, {
        onClick: async <T,>(e: React.MouseEvent<T>) => {
          await _cancelBtn.props.onClick?.(e);
          await off();
        },
      });

    return (
      <Modal
        ref={ref}
        visible={visible}
        okBtn={okBtn}
        cancelBtn={cancelBtn}
        closeBtn={closeBtn}
        {...restProps}
      />
    );
  }, [_closeBtn, _okBtn, _cancelBtn, visible, restProps, off]);

  return [modal, on, off, visible] as const;
};
