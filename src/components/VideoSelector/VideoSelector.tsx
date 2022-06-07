import { FC } from 'react';

import { Videos } from '@/pods/videos';

import {
  VideoSelectorBarAds,
  VideoSelectorData,
  VideoSelectorError,
  VideoSelectorNoResults,
  VideosLinearProgress,
} from './components';
import LoadMoreObserver from './components/LoadMoreObserver';
import { canLoadMoreVideos } from './utils';

interface VideoSelectorProps {
  videos: Videos[];
  error?: Error | string | null;
  isLoading?: boolean;
  onNextPage?: () => void;
}

const VideoSelector: FC<VideoSelectorProps> = ({
  videos,
  error,
  isLoading = false,
  onNextPage,
}) => {
  if (error) return <VideoSelectorError error={error} />;

  const lastElement = videos ? videos[videos.length - 1] : null;
  const noResults = lastElement && lastElement.mixed.length === 0;
  const loadMore = canLoadMoreVideos(
    videos.length === undefined ? null : videos[videos.length - 1]
  );

  return (
    <>
      <VideoSelectorBarAds />
      {videos && <VideoSelectorData videos={videos} />}
      {!isLoading && noResults && <VideoSelectorNoResults />}
      <VideosLinearProgress active={isLoading} />
      {onNextPage && loadMore && !isLoading && (
        <LoadMoreObserver callback={onNextPage} />
      )}
    </>
  );
};

export default VideoSelector;
