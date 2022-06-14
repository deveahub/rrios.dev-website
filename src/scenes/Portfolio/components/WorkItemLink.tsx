import Image from 'next/image';
import Link from 'next/link';

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/Tooltip';

interface WorkItemLinkProps {
  src: string;
  tooltip: string;
  href: string;
}

const WorkItemLink = ({ src, tooltip, href }: WorkItemLinkProps) => (
  <TooltipProvider delayDuration={0}>
    <TooltipRoot>
      <TooltipTrigger title={tooltip} tabIndex={-1}>
        <Link href={href} passHref>
          <a target="_blank">
            <Image
              alt={`${tooltip}-img`}
              layout="fixed"
              src={src}
              width={150}
              height={150}
            />
          </a>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={4}>
        {tooltip}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

export default WorkItemLink;
