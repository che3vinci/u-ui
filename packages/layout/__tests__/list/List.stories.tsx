import { mock } from "@c3/test";
import { Image, Text } from "@cui/atomic/src";
import { useState } from "react";
import { List } from "../../src/List";
import { Row } from "../../src/Row";

export default {
  title: "layout/List",
  component: List,
};
type Item = { id: number; name: string; active: boolean };
const idata: Item[] = [
  {
    id: 1,
    name: "FindingNothing222",
    active: true,
  },
  {
    id: 2,
    name: "22112",
    active: false,
  },
  {
    id: 3,
    name: "3333",
    active: false,
  },
];
const ItemX = (t: Item) => {
  const { active, ...restProps } = t;
  return (
    <Row active={active} {...restProps}>
      <Image css={{ w: 48, h: 48 }} src={mock.getRandomPic(32, 32)} />
      <Text>{t.name}</Text>
    </Row>
  );
};

export const Default = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      renderItem={(e: Item) => <ItemX {...e}></ItemX>}
      updateData={setData}
    />
  );
};
export const ListOfRow = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      renderItem={(e: Item) => (
        <Row>
          <Image src={mock.getRandomPic()} css={{ w: 50, h: 50 }} />
          <Text>{e.id}</Text>
        </Row>
      )}
      updateData={setData}
    />
  );
};
const colors = [
  mock.getRandomColor(),
  mock.getRandomColor(),
  mock.getRandomColor(),
];
export const CannotOverflow = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      dbg
      css={{ w: 400, overflow: "hidden" }}
      direction="row"
      renderItem={(e: Item, i: number) => (
        <Row style={{ width: 300, height: 200, background: colors[i] }}></Row>
      )}
      updateData={setData}
    />
  );
};
export const OverflowIsWorkForNormalLayout = () => {
  return (
    <div style={{ width: 400, overflow: "hidden", display: "flex" }}>
      <div style={{ minWidth: 300, height: 200, background: colors[0] }}></div>
      <div style={{ minWidth: 300, height: 200, background: colors[1] }}></div>
      <div style={{ minWidth: 300, height: 200, background: colors[2] }}></div>
    </div>
  );
};
