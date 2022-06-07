import { FC } from 'react';

import { ComponentProps } from '@/styles';

import { VideoSelectorExoClickAds } from './styles';

const VideoSelectorAds: FC<ComponentProps<typeof VideoSelectorExoClickAds>> = ({
  width,
  height,
  ...props
}) => (
  <VideoSelectorExoClickAds
    css={{
      minWidth: width,
      minHeight: height,
    }}
    width={width}
    height={height}
    {...props}
  />
);

export default VideoSelectorAds;
