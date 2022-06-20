import Image from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Text from '@/components/Text';
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/Tooltip';

interface ProjectLinkProps {
  image: string;
  name: string;
  url: string;
  urlRepository?: string;
}

const ProjectLink = ({ image, name, url, urlRepository }: ProjectLinkProps) => (
  <Stack
    direction="column"
    css={{
      maxWidth: '100%',
      '@bp2': {
        maxWidth: 400,
      },

      minWidth: 200,
      width: '100%',
    }}
  >
    <TooltipProvider delayDuration={0}>
      <TooltipRoot>
        <TooltipTrigger tabIndex={-1} title={name}>
          <Link href={url} passHref>
            <Stack as="a" direction="column" target="_blank">
              <Image
                alt={`${name}-img`}
                objectFit="cover"
                width="100%"
                height={200}
                src={image}
              />
            </Stack>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={8}>
          {name}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
    {urlRepository && (
      <Link href={urlRepository} passHref>
        <Text as="a">View code</Text>
      </Link>
    )}
  </Stack>
);

export default ProjectLink;
