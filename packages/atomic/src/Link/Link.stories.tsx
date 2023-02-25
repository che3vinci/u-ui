import { Link } from "./Link";
export default {
  component: Link,
  title: "atomic/Link",
};

export const Default = () => (
  <Link href="https://www.baidu.com" target="_blank">
    clickme
  </Link>
);
