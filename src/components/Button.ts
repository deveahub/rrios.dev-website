import { styled } from '@/styles';

const Button = styled('button', {
  borderRadius: '$md',
  variants: {
    variant: {
      solid: {
        backgroundColor: '$primary',
        color: 'white',
        border: 'none',
        p: 2,
      },
      link: {
        backgroundColor: 'transparent',
        border: 'none',
      },
    },
    fontWeight: {
      bold: {
        fontWeight: 'bold',
      },
      lighter: {
        fontWeight: 'lighter',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    fontWeight: 'bold',
  },
});

export default Button;
