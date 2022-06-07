import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { styled } from '@/styles';

export const VideoPlayerErrorContainer = styled(Stack, {
  justifyContent: 'center',
  alignItems: 'center',
  gap: 1,
});

export const VideoPlayerErrorText = styled(Text, {
  fontWeight: 600,
});
