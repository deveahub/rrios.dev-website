import Stack from '@/components/Stack';
import { styled } from '@/styles';

export const TagSelectorContainer = styled(Stack, {
  px: 1,
  mb: 0.5,

  '@bp4': {
    px: 0,
  },
});

export const TagsContainer = styled(Stack, {
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const Tag = styled('a', {
  backgroundColor: '$primary',
  p: 0.5,
  whiteSpace: 'nowrap',
  borderRadius: '$sm',
  transition: '$fast',
  minWidth: 30,
  textAlign: 'center',
  color: '#FFF',

  '&:hover': {
    backgroundColor: '$primary-dark',
  },
});

export const Input = styled('input', {
  mt: 1,
  py: 1,
  width: '100%',
  backgroundColor: '$bg',
  borderColor: '$foreground-dark',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: '$sm',
  color: '$text',
  fontSize: '16px',
  pl: 2,
  pr: 1,

  '@bp2': {
    maxWidth: 300,
  },
});
