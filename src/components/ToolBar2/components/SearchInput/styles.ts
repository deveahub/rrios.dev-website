import Button from '@/components/Button';
import { styled } from '@/styles';

export const Container = styled('div', {
  position: 'absolute',
  top: 52,
  left: 0,
  width: '100%',
  display: 'none',

  'div#autocomplete-stack:hover': {
    display: 'flex',
  },
  '&:focus-within div#autocomplete-stack': {
    display: 'flex',
  },
  '@bp2': {
    backgroundColor: 'none',
    top: 'auto',
    left: 2,
    position: 'relative',
    width: '600px',
    display: 'block',
  },
  variants: {
    visible: {
      true: {
        display: 'block',
      },
    },
  },
});

export const Input = styled('input', {
  py: 1,
  px: 2,
  pr: 5.5,
  backgroundColor: '$bg-alpha-2',
  color: '$text',
  boxShadow: '$sm',
  border: 'none',
  fontSize: '$md',
  width: '100%',
  borderRadius: '0',

  '@bp2': {
    backgroundColor: '$bg-alpha-1',
    borderTopRightRadius: '$md',
    borderBottomRightRadius: '$md',
  },
});

export const MobileButtonSearch = styled(Button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$bg-alpha-1 !important',
  boxShadow: '$sm',
  borderRadius: 0,
  borderTopRightRadius: '$md',
  borderBottomRightRadius: '$md',
  px: 1,
  zIndex: '$toolbar',
  width: 44,
  height: 44,
  color: '$text',
  '@bp2': {
    display: 'none',
  },

  variants: {
    visible: {
      true: {
        color: '$primary',
      },
    },
  },
});

export const SubmitSearchButton = styled(Button, {
  position: 'absolute',
  right: 14,
  bottom: 0,
  py: 1,
  px: 0.5,
  borderRadius: '$sm',
  color: '$text',

  '&:hover': {
    color: '$primary',
  },
});
