import { FC, ReactNode } from 'react';

import { Container } from './styles';

interface VideoSelectorContainerProps {
  children: ReactNode;
}

const VideoSelectorContainer: FC<VideoSelectorContainerProps> = ({
  children,
}) => (
  <Container>
    {children}
    <div />
    <div />
    <div />
    <div />
  </Container>
);

export default VideoSelectorContainer;
