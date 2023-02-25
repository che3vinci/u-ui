// import { mock } from '@c3/test';
import { rand } from "@c3/utils";
import { Image } from "@u-ui/atomic";
import _ from "lodash";
import React from "react";
import { BaseListItemType } from "../src";
import { Grid, GridProps } from "../src/Grid";

export default {
  component: Grid,
  title: "layout/Grid",
};
const mockx = {
  getRandomPic: (width = 160 * 6, height = 90 * 6) => {
    return `https://picsum.photos/id/${rand(10, 100)}/${width}/${height}.jpg`;
  },
};

//=====================================================================================================
// NGrid
// 指定列数，自动计算轨道的宽度（和内容一样宽）
//=====================================================================================================
type Item = {
  id: number;
  img: string;
};

const data: Item[] = _.times(5, e => ({
  id: e,
  img: mockx.getRandomPic(),
}));
export const NGridX3Column = () => {
  return (
    <Grid<GridProps<Item>, HTMLDivElement>
      css={{
        gridTemplateColumns: "repeat(3, auto)",
        placeContent: "center",
        gap: 40,
      }}
      data={data}
      renderItem={e => <Image css={{ w: 160, h: 90 }} src={e.img}></Image>}
    ></Grid>
  );
};

export const NGridX1 = () => {
  const data = _.times(5, e => ({
    id: e,
    img: mockx.getRandomPic(),
  }));
  return (
    <Grid<GridProps<Item>>
      dbg
      css={{
        gridTemplateColumns: "repeat(auto-fill, minmax(auto,auto))",
        placeContent: "center",
        gap: 40,
      }}
      data={data}
      renderItem={e => <Image css={{ w: 160, h: 90 }} src={e.img}></Image>}
    ></Grid>
  );
};
