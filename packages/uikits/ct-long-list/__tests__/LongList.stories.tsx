import { wait } from "@c3/utils";
import { BaseListItemType, Row } from "@cui/layout";
import React from "react";
import { useState } from "react";
import { LongList } from "../src/LongList";
export default {
  component: <div></div>,
  title: "uikits/LongList",
};

type DataItem = BaseListItemType & { name: string };
const listData: DataItem[] = [
  {
    id: 1,
    name: "name1",
  },
  {
    id: 2,
    name: "name1",
  },
];
export const Basic = () => {
  const [data, setData] = useState(listData);
  const [curPageNo, setCurPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <LongList<DataItem>
        // css={{ height: 300, overflow: "scroll" }}
        data={data}
        loading={loading}
        // curPageNo={1}
        startPageNo={1}
        direction={"column"}
        updateData={data => setData(data)}
        renderItem={(item: DataItem) => {
          return (
            <Row css={{ h: 200, border: "1px solid red" }}>
              name:{item.name}
            </Row>
          );
        }}
        onNextPage={async () => {
          // setCurPageNo(pageNo);
          setLoading(true);
          await wait(5000);
          setData(d => [
            ...d,
            { id: Math.random() * 100, name: `name:-${Math.random()}` },
            { id: Math.random() * 100, name: `name:-${Math.random()}` },
          ]);
          setLoading(false);
        }}
      />
    </div>
  );
};
