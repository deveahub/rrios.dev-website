/* eslint-disable react/no-array-index-key */
import { memo } from 'react';

import VideoLink from '@/components/VideoLink';
import { Videos } from '@/pods/videos';

import VideoSelectorAds from './VideoSelectorAds';
import VideoSelectorBarAds from './VideoSelectorBarAds';
import VideoSelectorContainer from './VideoSelectorContainer';

const VideoLinkMemo = memo(VideoLink);

interface VideoSelectorDataProps {
  videos: Videos[];
}

const COMMON_EXOCLICK_CONFIG = {
  width: '300',
  height: '250',
};

const EXOCLICK_CONFIG = {
  list: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657452&size=300x250',
  },
  last: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657452&size=300x250',
  },
};

const VideoSelectorData = ({ videos }: VideoSelectorDataProps) => (
  <VideoSelectorContainer>
    {videos.map((v, videosIdx) => (
      <>
        {v.mixed.map((video, idx) => (
          <>
            <VideoLinkMemo
              key={`${video.provider}.${video.id}.${videosIdx}.${idx}`}
              {...video}
            />
            {(idx === 20 || idx === 10 || idx === 30) && (
              <VideoSelectorAds
                title={`VideoSelectorAds idx: ${idx}`}
                key={`ads-${idx}`}
                {...EXOCLICK_CONFIG.list}
              />
            )}
          </>
        ))}
        <VideoSelectorAds
          title="VideoSelectorAds last"
          {...EXOCLICK_CONFIG.last}
        />
        <VideoSelectorBarAds />
      </>
    ))}
  </VideoSelectorContainer>
);

export default VideoSelectorData;
