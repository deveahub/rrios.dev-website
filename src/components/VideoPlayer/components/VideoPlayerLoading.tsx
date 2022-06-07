import { FC } from 'react';

import SkeletonBox from '@/components/SkeletonBox';
import Spinner from '@/components/Spinner';

import VideoPlayerLayout from './VideoPlayerLayout';

const VideoPlayerLoading: FC = ({ children }) => (
  <VideoPlayerLayout
    content={
      <SkeletonBox
        css={{
          size: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children || <Spinner />}
      </SkeletonBox>
    }
  />
);

export default VideoPlayerLoading;
