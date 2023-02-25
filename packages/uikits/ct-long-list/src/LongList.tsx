import { LoadingOutlined } from "@ant-design/icons";
import { isOverflow } from "@c3/dom";
import { useIsVisible } from "@c3/react";
import { BaseListItemType, Col, List, ListProps } from "@cui/layout";
import React, { useCallback, useEffect, useRef } from "react";

export type LongListProps<T extends BaseListItemType> = {
  onNextPage: () => Promise<void>;
  loadingIcon?: JSX.Element;
  loading?: boolean;
  startPageNo: number;
} & ListProps<T>;

export const LongList = <T extends BaseListItemType>(
  props: LongListProps<T>
) => {
  const { onNextPage, loading, loadingIcon, ...restProps } = props;
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, watch] = useIsVisible<HTMLDivElement>();

  //TODO: 防止多次触碰到底部，导致多次加载
  const onEndReached = useCallback(async () => {
    console.log("===>onEndReached");
    // pageNoRef.current += 1;
    await onNextPage();
  }, [onNextPage]);

  useEffect(() => {
    if (!bottomLineRef.current || !containerRef.current) {
      return;
    }
    if (!isOverflow(containerRef.current, "vertical")) {
      console.log("list is not overflow...");
      return;
    }
    watch(bottomLineRef.current, onEndReached);
  }, [onEndReached, watch]);

  return (
    <Col fx="center" ref={containerRef}>
      <List {...restProps}></List>
      {loading && (
        <div className="loading-icon">{loadingIcon || <LoadingOutlined />}</div>
      )}
      <div
        className="bottom-line"
        style={{ minHeight: 1, width: "100%" }}
        ref={bottomLineRef}
      />
    </Col>
  );
};
