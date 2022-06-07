import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Thumbnail } from '@/pods/video';

import { Thumb } from './styles';

type AnimatedThumbProps = {
  defaultThumb: string;
  thumbs: Array<Thumbnail>;
  alt: string;
};

const intersectionOptions = { root: null, threshold: 0, rootMargin: '-180px' };

const AnimatedThumb = ({ defaultThumb, thumbs, alt }: AnimatedThumbProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });
  const [thumbIdx, setThumbIdx] = useState<number | 'default'>('default');
  const ref = useRef<HTMLImageElement>(null);
  const timer = useRef<NodeJS.Timeout>();
  const autoMobileTimer = useRef<NodeJS.Timeout>();
  const thumb =
    thumbIdx === 'default' ? { src: defaultThumb } : thumbs[thumbIdx];

  const playThumbnail = useCallback(() => {
    setThumbIdx((currIdx) => {
      if (currIdx === 'default' || currIdx === thumbs.length - 1) return 0;
      return currIdx + 1;
    });
    if (autoMobileTimer.current) clearTimeout(autoMobileTimer.current);
    timer.current = setTimeout(playThumbnail, 700);
  }, [setThumbIdx, thumbs]);

  const stopThumbnail = useCallback(() => {
    setThumbIdx('default');
    if (autoMobileTimer.current) clearTimeout(autoMobileTimer.current);
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  }, [setThumbIdx]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (isMobile) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          autoMobileTimer.current = setTimeout(() => {
            playThumbnail();
          }, 500);
        } else {
          stopThumbnail();
        }
      }, intersectionOptions);

      if (ref.current) observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current && observer) observer.unobserve(ref.current);
    };
  }, [playThumbnail, stopThumbnail, isMobile]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', playThumbnail);
      ref.current.addEventListener('mouseleave', stopThumbnail);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', playThumbnail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current.removeEventListener('mouseleave', stopThumbnail);
      }
    };
  }, [playThumbnail, stopThumbnail]);

  useEffect(() => {
    window.addEventListener('resize', stopThumbnail);
    return () => {
      window.removeEventListener('resize', stopThumbnail);
    };
  }, [stopThumbnail]);

  return (
    <AspectRatioPrimitive.Root ratio={16 / 9}>
      <Thumb
        alt={alt}
        ref={ref}
        src={`${thumb.src}?w=248&fit=crop&auto=format`}
        srcSet={`${thumb.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
        onError={() => {
          if (ref.current) {
            ref.current.src = '/img/thumb-no-available.jpg';
            ref.current.removeEventListener('mouseenter', playThumbnail);
            ref.current.removeEventListener('mouseleave', stopThumbnail);
          }
        }}
        loading="lazy"
      />
    </AspectRatioPrimitive.Root>
  );
};

export default AnimatedThumb;
