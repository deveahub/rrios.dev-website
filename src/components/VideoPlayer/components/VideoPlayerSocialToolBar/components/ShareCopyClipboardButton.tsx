import { Trans } from 'next-i18next';
import { useRef, useState } from 'react';
import { Clipboard as ClipboardIcon } from 'react-feather';

import { TooltipContent, TooltipRoot } from '@/components/Tooltip';

import { StyledShareCopyClipboardButton } from '../styles';

interface ShareCopyClipboardButtonProps {
  url: string;
}

const ShareCopyClipboardButton = ({ url }: ShareCopyClipboardButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, 999999);
      navigator.clipboard.writeText(inputRef.current.value);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  return (
    <>
      <input
        type="text"
        style={{ display: 'none' }}
        value={url}
        ref={inputRef}
      />
      <TooltipRoot open={open}>
        <StyledShareCopyClipboardButton onClick={copyToClipboard}>
          <ClipboardIcon />
        </StyledShareCopyClipboardButton>
        <TooltipContent>
          <Trans i18nKey="video:shareCopiedSocialButton" />
        </TooltipContent>
      </TooltipRoot>
    </>
  );
};

export default ShareCopyClipboardButton;
