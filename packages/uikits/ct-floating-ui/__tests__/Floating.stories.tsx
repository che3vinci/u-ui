import { Placement } from "@floating-ui/react-dom-interactions";
import { Row } from "@u-ui/layout";
import React from "react";
import { Floating } from "../src/Base";
export default {
  component: <div></div>,
  title: "uikits/ct-loating-ui/float",
};

const placments = ["top", "bottom", "left", "right"] as Placement[];

export const Basic = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Row css={{ gap: 100, mt: 100, ml: 100 }}>
      {placments.map((e, idx) => (
        <Floating
          key={idx}
          visible={visible}
          onToggle={setVisible}
          overlay={<div>tooltip abc defghk aaa</div>}
          placement={e}
        >
          <button>{e}</button>
        </Floating>
      ))}
    </Row>
  );
};

export const TriggerX = () => {
  const [hoverVisible, setHoverVisible] = React.useState(false);
  const [clickVisible, setClickVisible] = React.useState(false);

  return (
    <Row css={{ gap: 100, mt: 100, ml: 100 }}>
      <Floating
        visible={hoverVisible}
        onToggle={setHoverVisible}
        overlay={<div>tooltip</div>}
        trigger={"hover"}
      >
        <button>hover</button>
      </Floating>
      <Floating
        visible={clickVisible}
        onToggle={setClickVisible}
        overlay={<div>tooltip</div>}
        trigger={"click"}
      >
        <button>click</button>
      </Floating>
    </Row>
  );
};
