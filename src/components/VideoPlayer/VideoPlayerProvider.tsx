import { FC, ReactNode } from 'react';

import { Video } from '@/pods/video';

import videoPlayerContext from './videoPlayerContext';

interface VideoPlayerProviderProps {
  video: Video;
  children: ReactNode;
}

const VideoPlayerProvider: FC<VideoPlayerProviderProps> = ({
  video,
  children,
}) => (
  <videoPlayerContext.Provider value={video}>
    {children}
  </videoPlayerContext.Provider>
);

export default VideoPlayerProvider;
