import { createContext } from 'react';

import { Video } from '@/pods/video';

const videoPlayerContext = createContext<Video | null>(null);

export default videoPlayerContext;
