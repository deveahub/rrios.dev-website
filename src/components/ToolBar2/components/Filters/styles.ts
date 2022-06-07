import Button from '@/components/Button';
import Select from '@/components/Select';
import { styled } from '@/styles';

export const Container = styled('div', {
  position: 'absolute',
  top: 52,
  backgroundColor: '$bg-alpha-1',
  left: 0,
  width: '100%',
  display: 'none',
  gap: 1,
  px: 1,

  '@bp1': {
    top: 'auto',
    left: 'auto',
    position: 'relative',
    width: 'fit-content',
    display: 'flex',
    px: 0,
  },
  variants: {
    visible: {
      true: {
        display: 'flex',
      },
    },
  },
});

export const MobileFilterButton = styled(Button, {
  width: 44,
  height: 44,
  px: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  svg: {
    color: '$text',
  },
  '@bp1': {
    display: 'none',
  },
  variants: {
    visible: {
      true: {
        svg: {
          color: '$primary',
        },
      },
    },
  },
});

export const StyledSelect = styled(Select, {
  width: '100%',
  boxShadow: '$sm',
  '@bp1': {
    width: 'auto',
    minWidth: '100px',
  },
});
