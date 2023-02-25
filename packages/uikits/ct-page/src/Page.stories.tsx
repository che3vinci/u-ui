import Page from "./Page";
import React from "react";

export default {
  title: "uikits/page",
  component: Page,
};

const Footer: React.FC = () => {
  return <div>footer</div>;
};
const Nav = () => {
  return <div>nav</div>;
};
const APage = (props: any) => {
  return (
    <Page wOfDd={1366} css={{ color: "White" }}>
      <Nav />
      {props.children}
      <Footer />
    </Page>
  );
};

export const CtPage = () => {
  return (
    <APage>
      <div>content</div>
    </APage>
  );
};
