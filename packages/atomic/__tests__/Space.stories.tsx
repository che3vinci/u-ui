import { Space } from "../src/Space";

export default {
  component: <div></div>,
  title: "atomic/space",
};
export const Basic = () => {
  return (
    <div>
      <Space size={24} css={{ border: "1px solid red" }} />
      <Space size={16} css={{ border: "1px solid red" }} />
    </div>
  );
};
