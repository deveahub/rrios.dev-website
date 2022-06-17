import Image from 'next/image';
import Link from 'next/link';

import Stack from '@/components/Stack';
import Text from '@/components/Text';

interface ProjectLinkProps {
  image: string;
  name: string;
  url: string;
}

const ProjectLink = ({ image, name, url }: ProjectLinkProps) => (
  <Stack>
    <Image objectFit="cover" width={150} height={150} src={image} />
    <Link href={url} passHref>
      <Text as="a">{name}</Text>
    </Link>
  </Stack>
);

export default ProjectLink;
