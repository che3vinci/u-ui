import { Atomic } from "../src/Atomic";
export default {
  component: Atomic,
  title: "atomic/Atomic",
};

export const Variants = () => {
  return (
    <div style={{ display: "flex" }}>
      <Atomic
        shape="round"
        css={{ border: "1px solid red", width: 100, height: 50 }}
      />
      <Atomic shape="rect" css={{ border: "1px solid red", w: 100, h: 20 }} />
    </div>
  );
};

export const activeProp = () => {
  return (
    <div style={{ display: "flex" }}>
      <Atomic
        css={{ border: "1px solid red", w: 100, h: 50 }}
        active={true}
        hidden
      />
    </div>
  );
};
