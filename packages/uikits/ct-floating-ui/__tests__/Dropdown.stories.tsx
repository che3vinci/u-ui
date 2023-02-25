import { mock } from "@c3/test";
import { absXYCenter } from "@u-ui/css";
import { Row } from "@u-ui/layout";
import { Dropdown } from "../src";
export default {
  component: Dropdown,
  title: "uikits/ct-loating-ui/Dropdown",
};

const defaultArgs = {
  overlay: mock.getList(),
};
export const ClickDropdown = () => {
  return (
    <Row css={{ ...absXYCenter() }}>
      <Dropdown {...defaultArgs}>
        <button data-test-id="ee">clickMe</button>
      </Dropdown>
    </Row>
  );
};
