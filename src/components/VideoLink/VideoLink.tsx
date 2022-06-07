import Link from 'next/link';
import { FC } from 'react';

import { Video } from '@/pods/video';

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '../Tooltip';
import AnimatedThumb from './AnimatedThumb';
import { Container, Info, LenghtTime, Title } from './styles';

interface VideoLinkProps extends Video {
  onClick?: (video: Video) => void;
}

const VideoLink: FC<VideoLinkProps> = ({ children: _, onClick, ...video }) => {
  const { provider, id, defaultThumb, title, thumbs, duration } = video;
  return (
    <Link
      href={`/video/${provider}/${id}/${title
        .toLowerCase()
        .replace(/\s/g, '-')}`}
      passHref
      shallow
      scroll
    >
      <Container onClick={() => onClick && onClick(video)}>
        <AnimatedThumb
          alt={title}
          defaultThumb={defaultThumb}
          thumbs={thumbs}
        />
        <Info>
          <LenghtTime>{duration}</LenghtTime>
          <TooltipProvider delayDuration={0}>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <span>
                  <Title type="button" disabled>
                    {title || '-'}
                  </Title>
                </span>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </Info>
      </Container>
    </Link>
  );
};

export default VideoLink;
