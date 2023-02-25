import { Text } from "@cui/atomic";
import { absXYCenter, flexCenter, pseudoArrow } from "@cui/css";
import { Row } from "@cui/layout";
import { useState } from "react";
import { Tooltip } from "../src";
import "./normal.css";

export default {
  component: Tooltip,
  title: "uikits/ct-loating-ui/tooltip",
};

export const EllipseText = () => {
  const text = "hello,world,12345";
  const [visible, setVisible] = useState(false);

  return (
    <Row css={{ gap: 100, ...absXYCenter() }}>
      <Tooltip
        visible={visible}
        onToggle={setVisible}
        trigger={["click"]}
        placement="top"
        overlay={
          <Text
            row={1}
            css={{
              px: 11,
              h: 36,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#151716",
              borderRadius: 8,
              color: "white",
              w: 100,

              ...flexCenter,
              ...pseudoArrow("bottom", 12, 6, {
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }),
            }}
          >
            {text}
          </Text>
        }
      >
        <Text css={{ display: "inline-block", fontSize: 40 }}>{text}</Text>
      </Tooltip>

      <Tooltip
        trigger={["hover"]}
        placement="bottom"
        visible={visible}
        onToggle={setVisible}
        overlay={
          <Text
            css={{
              px: 11,
              h: 36,
              w: 100,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#151716",
              borderRadius: 8,
              color: "white",
              display: "flex",
              overflow: "visible",

              ...flexCenter,
              ...pseudoArrow("top", 12, 6, {
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }),
            }}
          >
            {text}
          </Text>
        }
      >
        <Text
          css={{
            display: "inline-block",
            fontSize: 40,
          }}
        >
          {text}
        </Text>
      </Tooltip>
    </Row>
  );
};
