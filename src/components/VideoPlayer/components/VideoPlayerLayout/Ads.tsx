import dynamic from 'next/dynamic';
import { FC } from 'react';

import Stack from '@/components/Stack';

const ExoClickAds = dynamic(
  async () => (await import('@/components/ExoClickAds/')).ExoClickAdsMemo,
  {
    ssr: false,
  }
) as FC<any>;

export const AdsLeft = () => (
  <>
    {/* Desktop */}
    <Stack
      css={{
        display: 'none',
        '@bp3': {
          display: 'flex',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Left 1"
        src="//a.realsrv.com/iframe.php?idzone=4647794&size=160x600"
        width="160"
        height="600"
      />
      <ExoClickAds
        title="ExoClickAds VideoPlayer Left 2"
        src="//a.realsrv.com/iframe.php?idzone=4647794&size=160x600"
        width="160"
        height="600"
      />
    </Stack>

    {/* Tablet */}
    <Stack
      css={{
        display: 'none',

        '@bp15': {
          display: 'block',
        },
        '@bp2': {
          display: 'none',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Left 3"
        src="//a.realsrv.com/iframe.php?idzone=4647818&size=728x90"
        width="728"
        height="90"
      />
    </Stack>

    {/* Mobile */}
    <Stack
      css={{
        '@bp15': {
          display: 'none',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Left 4"
        src="//a.realsrv.com/iframe.php?idzone=4657448&size=300x100"
        width="300"
        height="100"
      />
    </Stack>
  </>
);

export const AdsRight = () => (
  <>
    {/* Desktop */}
    <Stack
      css={{
        display: 'none',
        '@bp2': {
          display: 'flex',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Rigth 1"
        src="//a.realsrv.com/iframe.php?idzone=4647794&size=160x600"
        width="160"
        height="600"
      />
      <ExoClickAds
        title="ExoClickAds VideoPlayer Rigth 2"
        src="//a.realsrv.com/iframe.php?idzone=4647794&size=160x600"
        width="160"
        height="600"
      />
    </Stack>
    {/* Tablet */}
    <Stack
      css={{
        display: 'none',

        '@bp15': {
          display: 'block',
        },
        '@bp2': {
          display: 'none',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Rigth 3"
        src="//a.realsrv.com/iframe.php?idzone=4647818&size=728x90"
        width="728"
        height="90"
      />
    </Stack>

    {/* Mobile */}
    <Stack
      css={{
        '@bp15': {
          display: 'none',
        },
      }}
    >
      <ExoClickAds
        title="ExoClickAds VideoPlayer Rigth 4"
        src="//a.realsrv.com/iframe.php?idzone=4657448&size=300x100"
        width="300"
        height="100"
      />
    </Stack>
  </>
);
