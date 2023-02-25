import { Col } from "../src/Col";
import { mock } from "@c3/test";
// import {Row}
export default {
  title: "layout/Col",
  component: Col,
};

export const Gap = () => {
  return (
    <div style={{ display: "flex" }}>
      <Col dbg gap={14}>
        {mock.getRandElements()}
      </Col>
      <Col dbg css={{ gap: 20 }}>
        {mock.getRandElements()}
      </Col>
    </div>
  );
};
export const FX = () => {
  return (
    <>
      <Col fx={"stretch"}>{mock.getRandElements()}</Col>
      <Col fx={"center"}>{mock.getRandElements()}</Col>
      <Col fx={"flex-start"}>{mock.getRandElements()}</Col>
      <Col fx={"flex-end"}>{mock.getRandElements()}</Col>
    </>
  );
};
export const FY = () => {
  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <Col fy={"stretch"} css={{ border: "1px solid lightgrey" }}>
        {mock.getRandElements()}
      </Col>
      <Col fy={"center"} css={{ border: "1px solid lightgrey" }}>
        {mock.getRandElements()}
      </Col>
      <Col fy={"flex-start"} css={{ border: "1px solid lightgrey" }}>
        {mock.getRandElements()}
      </Col>
      <Col fy={"flex-end"} css={{ border: "1px solid lightgrey" }}>
        {mock.getRandElements()}
      </Col>
    </div>
  );
};
