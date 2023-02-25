import { Button } from "@cui/atomic";
import { abs } from "@cui/css";
import { Box } from "@cui/layout";
import { Modal } from "../src/Modal";
import { useModal } from "../src/useModal";
export default {
  component: Modal,
  title: "uikits/Modal",
};

export const MyModal: React.FC = props => {
  const [modal, on, off] = useModal(
    {
      css: { background: "rgba(0,0,0,0.2)" },
      closeBtn: <Button css={{ ...abs({ top: 10, left: 10 }) }}>close</Button>,
      cancelBtn: (
        <Button css={{ ...abs({ top: 10, left: 100 }) }}>cancel</Button>
      ),
      body: (
        <Box css={{ w: 400, h: 300, background: "rgba(0,0,0,0.3)" }}>
          hello,world
        </Box>
      ),
    },
    { useAnimation: true }
  );

  return (
    <div>
      {modal}
      <button onClick={on}>showModal</button>
    </div>
  );
};
