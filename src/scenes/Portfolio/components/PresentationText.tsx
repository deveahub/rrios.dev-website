import Text from '@/components/Text';
import { styled } from '@/styles';

const StyledText = styled(Text, {
  px: 2,
  textAlign: 'center',
  '@bp2': {
    px: 0,
    textAlign: 'left',
  },
});

const PresentationText = () => (
  <StyledText>
    I develop web and mobile applications with react/native, if you are looking
    for a developer to carry out your idea do not hesitate to contact me.
  </StyledText>
);

export default PresentationText;
