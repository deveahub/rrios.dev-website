import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { styled } from '@/styles';

const Section = styled(Stack, {
  flexDirection: 'column',
  gap: 3,
  px: 1,
  '@bp2': {
    px: 0,
  },
});

export const SectionTitle = styled(Text, {
  fontSize: '$md',
  fontWeight: 500,
});

export const SectionContent = styled(Stack, {
  flexDirection: 'column',
});

export default Section;
