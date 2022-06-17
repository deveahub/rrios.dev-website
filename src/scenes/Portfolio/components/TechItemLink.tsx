import Image from 'next/image';

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/Tooltip';
import { ComponentProps, styled } from '@/styles';

const TechItemLinkContainer = styled('a', {
  display: 'flex',
  p: 1,
  size: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  position: 'relative',
  backgroundColor: '$bg-desaturate',
});

interface TechItemLinkProps
  extends ComponentProps<typeof TechItemLinkContainer> {
  src: string;
  tooltip: string;
}

const TechItemLink = ({ src, tooltip, ...props }: TechItemLinkProps) => (
  <TooltipProvider delayDuration={0}>
    <TooltipRoot>
      <TooltipTrigger tabIndex={-1} title={tooltip}>
        <TechItemLinkContainer target="_blank" {...props}>
          <Image alt={`${{ tooltip }}-img`} src={src} width={32} height={32} />
        </TechItemLinkContainer>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={4}>
        {tooltip}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

export default TechItemLink;
