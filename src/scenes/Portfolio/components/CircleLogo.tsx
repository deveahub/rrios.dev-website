import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { keyframes, styled } from '@/styles';

const textAnim = keyframes({
  to: {
    transform: 'translate(0, -2px)',
  },
});

const afterElementAnimation = keyframes({
  to: {
    transform: 'translate(0, 2px)',
  },
});

const beforeElementAnimation = keyframes({
  to: {
    transform: 'translate(0, 4px)',
  },
});

const beforeCircleElementAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
    transform: 'rotate(360deg)',
  },
});

const Circle = styled(Stack, {
  size: 20,
  border: '6px solid transparent',
  borderRadius: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  position: 'relative',
  backgroundColor: '$bg-dark-0',

  backgroundClip: 'padding-box',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    margin: '-6px',
    borderRadius: 'inherit',
    background:
      'linear-gradient(0deg, white, white, 40%, blue, red,50%, white 90%, blue, red)',
    animationName: beforeCircleElementAnimation.name,
    animationDuration: '1.3s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationPlayState: 'running',
  },
});

const CircleText = styled(Text, {
  position: 'relative',
  zIndex: 1,
  animationName: textAnim.name,
  animationDuration: '1.3s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-out',
  animationDirection: 'alternate',
  animationPlayState: 'running',

  '&::before, &::after': {
    zIndex: -1,
    animationDuration: '1.3s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'linear',
    animationPlayState: 'running',
    content: '</>',
    position: 'absolute',
  },
  '&::before': {
    animationName: beforeElementAnimation.name,
    color: 'blue',
  },
  '&::after': {
    animationName: afterElementAnimation.name,
    color: 'red',
    top: 0,
    left: 0,
  },
});

const CircleLogo = () => (
  <Circle>
    <CircleText>{'</>'}</CircleText>
  </Circle>
);

export default CircleLogo;
