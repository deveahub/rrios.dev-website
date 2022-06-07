import { FC, ReactNode } from 'react';

import { Container, VideoContainer } from '../../styles';
import { AdsLeft, AdsRight } from './Ads';
import { VideoPlayerLayoutContainer } from './styles';

interface VideoPlayerLayoutProps {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

const VideoPlayerLayout: FC<VideoPlayerLayoutProps> = ({
  content,
  header,
  footer,
}) => (
  <VideoPlayerLayoutContainer direction="column">
    {header && <Container direction="column">{header}</Container>}
    <VideoContainer>
      <AdsLeft />
      {content}
      <AdsRight />
    </VideoContainer>
    {footer && <Container>{footer}</Container>}
  </VideoPlayerLayoutContainer>
);

export default VideoPlayerLayout;
