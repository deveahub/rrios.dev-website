import Stack from '@/components/Stack';
import { styled } from '@/styles';

export const Container = styled('div', {
  position: 'sticky',
  width: '100%',
  maxWidth: '1500px',
  top: 0,
  zIndex: '$toolbar',
  pointerEvents: 'none',
  backgroundColor: '$bg-alpha-1',
});

export const TopBarStack = styled(Stack, {
  pointerEvents: 'all',
  px: 1,
  py: 0.5,
  '@bp4': {
    px: 0,
  },
  alignItems: 'center',
});
