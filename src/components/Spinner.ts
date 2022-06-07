import { keyframes, styled } from '@/styles';

const rotateAnim = keyframes({
  '0%': {
    transform: 'rotateZ(0)',
  },
  '100%': {
    transform: 'rotateZ(360deg)',
  },
});

const Spinner = styled('div', {
  animation: `${rotateAnim} 1s ease infinite`,
  animationPlayState: 'running',
  size: 5,
  borderRadius: '100%',
  border: '4px solid $colors$primary',
  borderTopColor: '$primary-dark',
});

export default Spinner;
