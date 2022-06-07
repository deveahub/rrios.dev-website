import Image from 'next/image';

import useVideoPlayer from '../../useVideoPlayer';
import ShareCopyClipboardButton from './components/ShareCopyClipboardButton';
import {
  SocialLink,
  StyledMailIcon,
  StyledTwitterIcon,
  VideoPlayerSocialToolBarContainer,
} from './styles';
import {
  makeEmailShareURL,
  makeRedditShareURL,
  makeTwitterShareURL,
  makeVideoURL,
} from './utils';

const VideoPlayerSocialToolBar = () => {
  const video = useVideoPlayer();

  return (
    <VideoPlayerSocialToolBarContainer alignItems="center">
      <SocialLink target="_blank" href={makeTwitterShareURL(video)}>
        <StyledTwitterIcon />
      </SocialLink>
      <SocialLink target="_blank" href={makeRedditShareURL(video)}>
        <Image src="/img/reddit-social-icon.svg" width={40} height={40} />
      </SocialLink>
      <SocialLink target="_blank" href={makeEmailShareURL(video)}>
        <StyledMailIcon />
      </SocialLink>
      <ShareCopyClipboardButton
        url={makeVideoURL(video.id, video.provider, video.title)}
      />
    </VideoPlayerSocialToolBarContainer>
  );
};

export default VideoPlayerSocialToolBar;
