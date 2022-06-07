import { FC, useEffect, useRef } from 'react';

interface LoadMoreObserverProps {
  callback: () => void;
}

const intersectionOptions = { root: null, threshold: 0, rootMargin: '700px' };

const LoadMoreObserver: FC<LoadMoreObserverProps> = ({ callback }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    }, intersectionOptions);

    if (ref.current) observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [callback]);

  return <div ref={ref} style={{ width: '100%', height: '10px' }} />;
};

export default LoadMoreObserver;
