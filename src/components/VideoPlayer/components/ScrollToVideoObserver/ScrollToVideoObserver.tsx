import { FC, RefObject, useCallback, useEffect, useState } from 'react';
import { ArrowUp as ArrowUpIcon } from 'react-feather';

import { ScrollToVideoButton, ScrollToVideoContainer } from './styles';

interface ScrollToVideoObserverProps {
  iframeRef: RefObject<HTMLIFrameElement>;
}

const intersectionOptions = { root: null, threshold: 0, rootMargin: '-100px' };

const ScrollToVideoObserver: FC<ScrollToVideoObserverProps> = ({
  iframeRef,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, intersectionOptions);

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, [iframeRef, setVisible]);

  const scrollToVideo = useCallback(
    () => iframeRef.current?.scrollIntoView(),
    [iframeRef]
  );

  return visible ? null : (
    <ScrollToVideoContainer>
      <ScrollToVideoButton title="Scroll to video" onClick={scrollToVideo}>
        <ArrowUpIcon size={40} />
      </ScrollToVideoButton>
    </ScrollToVideoContainer>
  );
};

export default ScrollToVideoObserver;
