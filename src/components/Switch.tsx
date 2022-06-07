import {
  Root,
  SwitchProps as PrimitiveSwitchProps,
  Thumb,
} from '@radix-ui/react-switch';
import { FC } from 'react';

import { styled } from '@/styles';

interface SwitchProps extends PrimitiveSwitchProps {}

const StyledRoot = styled(Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$foreground-light-2',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: '$sm',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': {
    outline: 'red',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
  },
});

const StyledThumb = styled(Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '100%',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const Switch: FC<SwitchProps> = (props) => (
  <StyledRoot {...props}>
    <StyledThumb />
  </StyledRoot>
);

export default Switch;
