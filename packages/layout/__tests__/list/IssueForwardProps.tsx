import React, { useState } from "react";
import { BaseListItemType, List, ListProps } from "../../src";

//FIXME:如果props没有传递下去，就会导致List组件添加的属性丢失
//调用方认为没有毛病，但是实际上每个组件都必须传递props下去，否则就会导致属性丢失

const _data: BaseListItemType[] = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
];

//FooItem didn't forward props leading to click event and active attribute lost
const NotForwardProps: React.FC = () => {
  return <div>foo</div>;
};

const Issue: React.FC = () => {
  const [data, setData] = useState(_data);
  return (
    <List<ListProps<BaseListItemType>>
      data={data}
      updateData={setData}
      renderItem={e => {
        return <NotForwardProps />;
      }}
    ></List>
  );
};
export default Issue;
