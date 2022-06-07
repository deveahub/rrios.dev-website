import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FC } from 'react';
import { X as XIcon } from 'react-feather';

import { ComponentProps, styled } from '@/styles';

const StyledContent = styled(DialogPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  boxShadow: '$sm',
  px: 2,
  py: 2,
  gap: 2,
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  height: 190,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  backgroundColor: '$bg',
  zIndex: '$dialog',
  borderRadius: '$sm',
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$bg-alpha-1',
  position: 'fixed',
  inset: 0,
  zIndex: '$dialog',
});

export const Title = styled(DialogPrimitive.Title, {});

const StyledClose = styled(DialogPrimitive.Close, {
  position: 'absolute',
  right: 16,
  top: 16,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderRadius: '$sm',
  border: 'none',
  size: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: 0,
  svg: {
    color: '$text',
    size: 2,
  },
  'svg:hover': {
    color: '$primary',
  },
});

export const Close = () => (
  <StyledClose>
    <XIcon width={32} height={32} />
  </StyledClose>
);

const StyledTrigger = styled(DialogPrimitive.Trigger, {
  padding: 0,
  size: '44px',
  minWidth: '44px',
  backgroundColor: 'transparent',
  border: 'none',
  '&[data-state="open"]': {
    svg: {
      color: '$primary',
    },
  },
  svg: {
    color: '$text',
  },
});

interface DialogProps extends DialogPrimitive.DialogProps {
  trigger?: ComponentProps<typeof StyledTrigger>;
}

const Dialog: FC<DialogProps> = ({ trigger, children, ...props }) => (
  <DialogPrimitive.Root {...props}>
    {trigger && <StyledTrigger {...trigger} />}
    <DialogPrimitive.Portal>
      <StyledOverlay
        onClick={(e) => {
          e.preventDefault();
        }}
      />
      <StyledContent>{children}</StyledContent>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default Dialog;
