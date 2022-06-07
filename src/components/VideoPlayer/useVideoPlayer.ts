import { useContext } from 'react';

import videoPlayerContext from './videoPlayerContext';

const useVideoPlayer = () => {
  const video = useContext(videoPlayerContext);

  if (!video) throw new Error('Video not provides data');

  return video;
};

export default useVideoPlayer;
