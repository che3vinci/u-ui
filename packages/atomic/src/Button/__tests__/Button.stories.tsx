import { wait } from '@c3/utils';
import { Text } from '../../../src/Text';
import { Button } from '../Button';
import { useButton } from '../useButton';
export default {
  component: Button,
  title: 'atomic/Button',
};
const defaultStyle = {
  w: 100,
  h: 40,
  border: '1px solid green',
};

export const NormalButton = () => <Button>normal button</Button>;

export const OnHoverButton = () => (
  <Button
    css={defaultStyle}
    onMouseEnter={() => {
      alert('click');
    }}
  >
    hello
  </Button>
);
export const ButtonAsLink = () => (
  <Button as="a" href="http://www.baidu.com" css={defaultStyle}>
    baidu.com
  </Button>
);
export const TestUseButton = () => {
  return useButton(
    <Button
      css={{
        w: 100,
        h: 40,
        children: 'click2loading',
      }}
    >
      <Text>clickme12</Text>
    </Button>,
    {
      useLoading: true,
    }
  );
};

export const LoadingButton = () => {
  return useButton(
    <Button
      onClick={async () => {
        console.log('222');
        await wait(10000);
      }}
      css={{
        w: 100,
        h: 40,
        children: 'click2loading',
        cursor: 'copy',
      }}
    >
      <Text>clickme12</Text>
    </Button>,
    {
      useLoading: true,
    }
  );
};
