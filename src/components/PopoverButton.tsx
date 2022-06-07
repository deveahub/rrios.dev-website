import { Arrow, Close, Content, Root, Trigger } from '@radix-ui/react-popover';
import { FC, ReactNode } from 'react';

import { ComponentProps, styled } from '@/styles';

const StyledTrigger = styled(Trigger, {
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '$bg',
  '& svg': {
    color: '$foreground',
  },
  variants: {
    size: {
      sm: {
        size: 5,
      },
    },
    visible: {
      true: {
        '& svg': {
          color: '$primary',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const StyledContent = styled(Content, {
  background: '$bg',
  p: 1,
  borderRadius: 'sm',
  boxShadow: '$sm',
});

const StyledArrow = styled(Arrow, {
  fill: '$bg',
});

interface PopoverButtonProps {
  trigger: ReactNode;
  content: ReactNode;
  triggerProps?: ComponentProps<typeof StyledTrigger>;
  contentProps?: ComponentProps<typeof StyledContent>;
}

const PopoverButton: FC<PopoverButtonProps> = ({
  triggerProps = {},
  trigger,
  content,
  contentProps = {},
}) => (
  <Root modal={false}>
    <StyledTrigger {...triggerProps}>{trigger}</StyledTrigger>
    <StyledContent portalled={false} {...contentProps}>
      {content}
      <Close />
      <StyledArrow />
    </StyledContent>
  </Root>
);

export default PopoverButton;
