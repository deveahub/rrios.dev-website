import { styled } from '@/styles';

export const Link = styled('a', {
  display: 'flex',
  backgroundColor: '$bg-alpha-1',
  boxShadow: '$sm',
  borderTopLeftRadius: '$md',
  borderBottomLeftRadius: '$md',
  zIndex: '$toolbar2',
  px: 1,
  height: '44px',
});
