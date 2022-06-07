import Stack from '@/components/Stack';
import { styled } from '@/styles';

export const AutocompleteContainer = styled(Stack, {
  backgroundColor: 'white',
  width: '100%',
  position: 'absolute',
  display: 'none',
  top: 45,
  borderRadius: '$sm',
});

export const AutocompleteItem = styled('a', {
  color: '$text',
  backgroundColor: '$bg',
  border: 'none',
  textAlign: 'left',
  fontSize: '$sm',
  p: 1,
  '&:hover': {
    backgroundColor: '$primary',
    color: 'white',
  },
  '&:focus': {
    backgroundColor: '$primary !important',
    color: 'white',
  },
  '&:target': {
    backgroundColor: '$primary',
    color: 'white',
  },
  '&:active': {
    backgroundColor: '$primary',
    color: 'white',
  },
});
