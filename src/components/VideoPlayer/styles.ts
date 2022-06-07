import Stack from '@/components/Stack';
import { styled } from '@/styles';

export const VideoIframe = styled('iframe', {
  width: '100%',
  height: '100%',
  minHeight: '350px',

  '@bp15': {
    minHeight: '500px',
  },

  '@bp4': {
    maxWidth: '850px',
  },
});

export const Container = styled(Stack, {
  px: 1,
  zIndex: '$video',
  gap: 0.5,
  '@bp4': {
    px: 0,
  },
});

export const VideoContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  justifyItems: 'center',

  '@bp2': {
    gridTemplateColumns: '1fr auto',
  },

  '@bp3': {
    gridTemplateColumns: 'auto 1fr auto',
  },
});
