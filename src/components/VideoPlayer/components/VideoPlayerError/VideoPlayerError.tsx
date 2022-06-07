import { Trans } from 'next-i18next';
import { AlertTriangle as AlertTriangleIcon } from 'react-feather';

import VideoPlayerLoading from '../VideoPlayerLoading';
import { VideoPlayerErrorContainer, VideoPlayerErrorText } from './styles';

const VideoPlayerError = () => (
  <VideoPlayerLoading>
    <VideoPlayerErrorContainer direction="column">
      <AlertTriangleIcon />
      <VideoPlayerErrorText>
        <Trans i18nKey="video:errorsVideoNotFound" />
      </VideoPlayerErrorText>
    </VideoPlayerErrorContainer>
  </VideoPlayerLoading>
);

export default VideoPlayerError;
