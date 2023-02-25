import { Col } from "@cui/layout";
import { styled } from "@yuejs/react";
import React, { CSSProperties } from "react";

type PageProps = {
  wOfDd: number | string; // width of design document
} & {
  children: React.ReactNode[];
};

const __Viewport = styled(Col, {
  w: "100vw",
  fx: "center",
});

const __Main = styled(
  Col,
  {
    minHeight: "100vh",
    "& > *": {
      width: "100%",
    },
    variants: {
      w: {
        dynamic(x: CSSProperties["width"]) {
          return { width: x };
        },
      },
    },
  },
  { as: "main" }
);

const _Page = (props: PageProps) => {
  const { wOfDd, children, ...restProps } = props;
  return (
    <__Viewport className="viewport" {...restProps}>
      <__Main w={wOfDd}>{children}</__Main>
    </__Viewport>
  );
};
const Page = styled(_Page as React.FC, {});
export default Page;
