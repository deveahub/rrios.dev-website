import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

import defaultTheme from './theme';
import utils from './utils';

export type { ComponentProps, VariantProps } from '@stitches/react';

export const breakpoints = {
  root: '(min-width: 0px)',
  bp1: '(min-width: 520px)',
  bp13: '(min-width: 580px)',
  bp15: '(min-width: 750px)',
  bp2: '(min-width: 1030px)',
  bp3: '(min-width: 1200px)',
  bp4: '(min-width: 1500px)',
  bp41: '(min-width: 1520px)',
  bp5: '(min-width: 1660px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: defaultTheme,
  utils,
  media: breakpoints,
});

export type CSS = Stitches.CSS<typeof config>;
