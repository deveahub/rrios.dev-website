import { SexualityScope, VideoOrder } from '@/pods/videos';

export const VIDEO_ORDER_OPTIONS: Record<VideoOrder, string> = {
  'most-popular': 'common:toolbarFiltersOrderMostPopular',
  latest: 'common:toolbarFiltersOrderLatest',
  longest: 'common:toolbarFiltersOrderLongest',
  shortest: 'toolbarFiltersOrderShortest',
};

export const VIDEO_SEXUALITY_SCOPE_OPTIONS: Record<SexualityScope, string> = {
  all: 'common:toolbarFiltersOrientationAll',
  straight: 'common:toolbarFiltersOrientationStraight',
  gay: 'common:toolbarFiltersOrientationGay',
};
