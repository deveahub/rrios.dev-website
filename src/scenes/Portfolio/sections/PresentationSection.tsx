import Image from 'next/image';

import Stack from '@/components/Stack';
import Text from '@/components/Text';
import CircleLogo from '@/scenes/Portfolio/components/CircleLogo';
import { styled } from '@/styles';

const ImageContainer = styled('div', {
  // display: 'none',
  display: 'block',

  // '@bp13': {
  // },
});

const PresentationSection = () => (
  <Stack
    spacing={{
      '@initial': 3,
      '@bp2': 0,
    }}
    direction={{
      '@initial': 'column',
      '@bp2': 'rowReverse',
    }}
  >
    <Stack fullWidth justifyContent="center" alignItems="center">
      <CircleLogo />
    </Stack>
    <Stack
      spacing={{
        '@initial': 3,
        '@bp15': 0,
      }}
      direction={{
        '@initial': 'column',
        '@bp15': 'row',
      }}
      alignItems={{
        '@initial': 'center',
        '@bp15': 'start',
      }}
      justifyContent={{
        '@initial': 'center',
        '@bp2': 'start',
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        css={{
          border: '1px solid $colors$text',
          width: '100%',
          '@bp13': {
            width: 'fit-content',
          },
          whiteSpace: 'nowrap',
          height: 200,
          maxHeight: 200,
          p: 2,
        }}
      >
        <Text
          css={{
            fontSize: '4rem',
            fontWeight: 400,
          }}
        >
          I&apos;M
        </Text>
        <Stack
          direction="column"
          css={{
            fontSize: '1.5rem',
            fontWeight: 300,
          }}
        >
          <Text>Roberto Ríos</Text>
          <Text
            css={{
              fontSize: '1.1rem',
              fontWeight: 300,
            }}
          >
            web & mobile apps developer
          </Text>
        </Stack>
      </Stack>
      <ImageContainer>
        <Image layout="fixed" src="/img/me.jpeg" width={200} height={200} />
      </ImageContainer>
    </Stack>
  </Stack>
);

export default PresentationSection;
