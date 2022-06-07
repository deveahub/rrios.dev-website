import Button from '@/components/Button';
import { styled } from '@/styles';

export const ScrollToVideoButton = styled(Button, {
  size: 6,
  zIndex: '$scrollVideoButton',
  backgroundColor: '$primary',
  p: '4px !important',
  borderRadius: '100%',
  pointerEvents: 'all',
  svg: {
    cursor: 'pointer',
  },
});

export const ScrollToVideoContainer = styled('div', {
  position: 'fixed',
  pointerEvents: 'none',
  px: 3,
  width: '100%',
  maxWidth: 1500,
  justifyContent: 'flex-end',
  display: 'flex',
  mx: '0 auto',
  bottom: 32,
  zIndex: '$scrollVideoButton',
  '@bp5': {
    maxWidth: 1565,
    px: 0,
  },
});
