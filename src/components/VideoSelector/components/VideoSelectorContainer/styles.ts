import { styled } from '@/styles';

export const Container = styled('div', {
  display: 'grid',
  gap: 0.5,
  px: 1,
  gridTemplateColumns: '100%',

  '@bp15': {
    gridTemplateColumns: 'repeat(2, 50%)',
  },

  '@bp3': {
    gridTemplateColumns: 'repeat(3, 33.33%)',
  },

  '@bp4': {
    gridTemplateColumns: 'repeat(4, 24.8%)',
    px: 0,
  },
});
