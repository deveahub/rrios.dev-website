import { keyframes, styled } from '@/styles';

const gradientAnim = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

const SkeletonBox = styled('div', {
  background:
    'linear-gradient(-45deg, $colors$foreground-dark, $colors$foreground-light, $colors$foreground-dark)',
  backgroundSize: '400% 400%',
  animation: `${gradientAnim} 5s ease infinite`,
  animationPlayState: 'running',
});

export default SkeletonBox;
