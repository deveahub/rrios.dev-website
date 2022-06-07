import { styled } from '@/styles';

const Fieldset = styled('fieldset', {
  border: 'none',
  display: 'flex',
  mx: 2,
  padding: '0',
  variants: {
    gap: {
      1: {
        gap: 1,
      },
      2: {
        gap: 2,
      },
      3: {
        gap: 3,
      },
      4: {
        gap: 4,
      },
      5: {
        gap: 5,
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      column: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: 1,
  },
});

export const Label = styled('label', {});

export default Fieldset;
