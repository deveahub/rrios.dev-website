import dynamic from 'next/dynamic';

import Stack from '@/components/Stack';
import { styled } from '@/styles';

const ExoClickAds = dynamic(() => import('@/components/ExoClickAds'), {
  ssr: false,
});

export const AdsContainer = styled(Stack, {
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gridColumnStart: 1,
  minHeight: '100px',
  gridColumnEnd: 1,
  '@bp1': {
    gridColumnStart: 1,
    gridColumnEnd: 2,
  },

  '@bp15': {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },

  '@bp3': {
    gridColumnStart: 1,
    gridColumnEnd: 4,
  },
  '@bp4': {
    gridColumnStart: 1,
    gridColumnEnd: 5,
  },
});

export const ExoClickAdsResponsive = styled(ExoClickAds, {
  variants: {
    variant: {
      mobile1: {
        display: 'none',
        '@bp15': {
          display: 'block',
        },
      },
      mobile2: {
        display: 'none',
        '@bp2': {
          display: 'block',
        },
      },
      tablet: {
        display: 'none',
        '@bp4': {
          display: 'block',
        },
      },
      laptop: {
        display: 'none',
        '@bp41': {
          display: 'block',
        },
      },
    },
  },
});
