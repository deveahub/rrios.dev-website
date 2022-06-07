import { FC } from 'react';

import Stack from '@/components/Stack';
import Text from '@/components/Text';

interface VideoSelectorErrorProps {
  error: Error | string;
}

const VideoSelectorError: FC<VideoSelectorErrorProps> = ({ error }) => (
  <Stack>
    <Text>{error instanceof Error ? error.message : error}</Text>
  </Stack>
);

export default VideoSelectorError;
