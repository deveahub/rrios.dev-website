import { styled } from '@/styles';

import Stack from '../Stack';

export const Keyword = styled('a', {
  padding: 0,
  borderRadius: '$sm',
  color: 'white',
  fontWeight: 500,
  fontSize: '$xs',
  px: 0.5,
  backgroundColor: '$primary',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$primary-dark',
  },
});

export const KeywordsContainer = styled(Stack, {
  gap: 1,
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
  overflowX: 'auto',
  pb: 0.5,
});
