import { useRef } from 'react';

import { Keywords } from '@/components/Keyword';
import Stack from '@/components/Stack';
import Text from '@/components/Text';

import { VideoIframe } from '../styles';
import useVideoPlayer from '../useVideoPlayer';
import ScrollToVideoObserver from './ScrollToVideoObserver';
import VideoPlayerLayout from './VideoPlayerLayout';
import { VideoPlayerSocialToolBar } from './VideoPlayerSocialToolBar';

const VideoPlayerData = () => {
  const { title, keywords, embed } = useVideoPlayer();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <>
      <VideoPlayerLayout
        header={
          <>
            <Text as="h1">{title}</Text>
            {keywords && <Keywords keywords={keywords} />}
          </>
        }
        content={
          <Stack direction="column" fullWidth fullHeight>
            <VideoIframe
              title="video"
              ref={iframeRef}
              src={embed}
              allowFullScreen
            />
            <VideoPlayerSocialToolBar />
          </Stack>
        }
      />
      <ScrollToVideoObserver iframeRef={iframeRef} />
    </>
  );
};

export default VideoPlayerData;
