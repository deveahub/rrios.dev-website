import Image from 'next/image';

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/Tooltip';
import { ComponentProps, styled } from '@/styles';

const TechItemContainer = styled('a', {
  display: 'flex',
  p: 1,
  size: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  position: 'relative',
  backgroundColor: '$bg-desaturate',
});

interface TechItemProps extends ComponentProps<typeof TechItemContainer> {
  src: string;
  tooltip: string;
}

const TechItem = ({ src, tooltip, ...props }: TechItemProps) => (
  <TooltipProvider delayDuration={0}>
    <TooltipRoot>
      <TooltipTrigger title={tooltip}>
        <TechItemContainer target="_blank" {...props}>
          <Image alt={`${{ tooltip }}-img`} src={src} width={32} height={32} />
        </TechItemContainer>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={4}>
        {tooltip}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

export default TechItem;
