import dynamic from 'next/dynamic';

import { styled } from '@/styles';

const ExoClickAds = dynamic(
  async () => (await import('@/components/ExoClickAds')).ExoClickAdsMemo,
  {
    ssr: false,
  }
);

export const VideoSelectorExoClickAds = styled(ExoClickAds, {
  justifySelf: 'center',
  alignSelf: 'center',
});
