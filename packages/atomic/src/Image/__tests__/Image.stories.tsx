import { mock } from "@c3/test";
import { Image } from "../Image";

export default {
  component: Image,
  title: "atomic/Image",
};

export const Default = () => (
  <Image
    src={mock.getRandomPic()}
    loading={false}
    css={{
      w: 100,
      aspectRatio: "1",
    }}
  ></Image>
);
export const Loading = () => (
  <Image
    src={mock.getRandomPic()}
    css={{
      w: 100,
      aspectRatio: "1",
    }}
  />
);
export const ShowDefaultFallback = () => (
  <Image
    src={"xx"}
    css={{
      w: 100,
      aspectRatio: "1",
    }}
  />
);
export const RoundButton = () => {
  return (
    <Image
      src={mock.getRandomPic()}
      shape="round"
      css={{ w: 200, h: 40, border: "1px solid blue" }}
    />
  );
};

//global CSS should set role="button" show cursor: pointer
export const RoleAsButton = () => {
  return (
    <Image
      src={mock.getRandomPic()}
      css={{ w: 200, h: 40, border: "1px solid blue" }}
      role="button"
    />
  );
};
