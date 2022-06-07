import { FC } from 'react';

import { Video } from '@/pods/video';

import VideoPlayerData from './components/VideoPlayerData';
import VideoPlayerError from './components/VideoPlayerError';
import VideoPlayerLoading from './components/VideoPlayerLoading';
import VideoPlayerProvider from './VideoPlayerProvider';

interface VideoPlayerProps {
  video: Video;
  isLoading: boolean;
  error: string | Error;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video, isLoading, error }) => {
  if (error) return <VideoPlayerError />;

  if ((isLoading && !video) || !video) return <VideoPlayerLoading />;

  return (
    <VideoPlayerProvider video={video}>
      <VideoPlayerData />
    </VideoPlayerProvider>
  );
};

export default VideoPlayer;
