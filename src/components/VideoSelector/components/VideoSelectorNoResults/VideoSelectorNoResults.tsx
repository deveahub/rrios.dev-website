import { Trans } from 'next-i18next';

import { VideoSelectorNoResultsText } from './styles';

const VideoSelectorNoResults = () => (
  <VideoSelectorNoResultsText as="h1">
    <Trans i18nKey="videos:noResults" />
  </VideoSelectorNoResultsText>
);

export default VideoSelectorNoResults;
