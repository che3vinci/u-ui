import { useState } from "react";
import { Popover } from "../src/Popover";

import { mock } from "@c3/test";
import { Row } from "@cui/layout";

export default {
  component: Popover,
  title: "uikits/ct-loating-ui/popover",
};

const Overlay = mock.getList();

export const PopoverX = () => {
  const [hoverVisible, setHoverVisible] = useState(false);
  const [clickVisible, setClickVisible] = useState(false);

  return (
    <Row css={{ gap: 50, mt: 200, fx: "center" }}>
      <Popover
        visible={clickVisible}
        onToggle={setClickVisible}
        overlay={Overlay}
        placement="bottom"
      >
        <button>click</button>
      </Popover>
      <Popover
        visible={hoverVisible}
        onToggle={setHoverVisible}
        overlay={Overlay}
        trigger={["hover"]}
      >
        <button>hover</button>
      </Popover>
    </Row>
  );
};
