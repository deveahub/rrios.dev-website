import { Mail as MailIcon, Twitter as TwitterIcon } from 'react-feather';

import Stack from '@/components/Stack';
import { TooltipTrigger } from '@/components/Tooltip';
import { styled } from '@/styles';

export const StyledTwitterIcon = styled(TwitterIcon, {
  fill: '#1DA1F2',
  color: '#1DA1F2',
});

export const StyledMailIcon = styled(MailIcon, {
  fill: '$bg',
  color: '$primary',
  height: 40,
});

export const SocialLink = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  size: 5,
});

export const VideoPlayerSocialToolBarContainer = styled(Stack, {
  p: 1,
  gap: 2,
});

export const StyledShareCopyClipboardButton = styled(TooltipTrigger, {
  color: '#d4ab00',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  size: 5,
  padding: 0,
  cursor: 'pointer',
});
