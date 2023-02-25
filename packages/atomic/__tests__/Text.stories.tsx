import { Text, Title } from '../src';

export default {
  component: Text,
  title: 'atomic/Text',
};
export const TextAsTitle = () => {
  return (
    <Title>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit.
    </Title>
  );
};
export const gradientText = () => {
  return (
    <Text
      gradient="linear-gradient(to right, red, #3f3)"
      css={{
        w: 300,
        color: 'green',
        typo: { fontSize: 20, fontWeight: 200 },
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit
    </Text>
  );
};

export const TwoLineText = () => {
  return (
    <Text
      rows={2}
      css={{
        w: 300,
        typo: { fontSize: 20, fontWeight: 200 },
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit
    </Text>
  );
};
export const Ttext2 = () => {
  return (
    <Text
      css={{
        typo: {
          fontSize: 24,
          // fontWeight: cardStatus === 'future' ? 400 : 500,
          lineHeight: 1,
          fontFamily: 'Poppins',
        },
        // color: cardStatus === 'future' ? 'rgba(255, 255, 255, 0.3)' : 'white',
        _before: {
          w: 28,
          h: 28,
          // ...absYCenter({ left: -28 - 12 }),
          borderRadius: '50%',
          // ...flexCenter,
          typo: {
            fontSize: 16,
            fontWeight: 600,
            fontFamily: 'Poppins',
          },
        },
      }}
    >
      1SSDDFFFFFFFFFFF
    </Text>
  );
};
