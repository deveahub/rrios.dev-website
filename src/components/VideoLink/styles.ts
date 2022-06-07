import { styled } from '@/styles';

export const Container = styled('a', {
  width: '100%',
  minHeight: '220px',
});

export const Info = styled('div', {
  position: 'relative',
});

export const LenghtTime = styled('p', {
  position: 'absolute',
  top: -34,
  left: 4,
  pointerEvents: 'none',
  backgroundColor: '#333',
  fontWeight: 400,
  color: 'white',
  px: 0.5,
  borderRadius: '$sm',
  fontSize: '0.8rem',
});

export const Thumb = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  backgroundColor: '#b8b7b747',
});

export const Title = styled('button', {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  fontSize: '1.1rem',
  maxWidth: '100%',
  color: '$text',
  width: '100%',
  textAlign: 'left',
  border: 'none',
  pt: 2,
  pb: 2.5,
  px: 0.5,
  pointerEvents: 'none',
  backgroundColor: 'transparent',
});
