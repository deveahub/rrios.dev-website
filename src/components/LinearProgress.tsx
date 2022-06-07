import { FC, useEffect, useRef, useState } from 'react';

import { CSS, styled } from '@/styles';

const Line = styled('div', {
  height: '3px',
  backgroundColor: '$primary',
  transition: '$fast',
});

type LinearProgressProps = {
  active: boolean;
  increaseMS?: number;
  increaseModifier?: (currPercentage: number) => number;
  increaseMax?: number;
  css?: CSS;
};

const linearIncreaseModifier = (currPercentage: number, increaseMax: number) =>
  currPercentage + (increaseMax - currPercentage) / 7;

const LinearProgress: FC<LinearProgressProps> = ({
  active,
  increaseMS = 100,
  increaseModifier = linearIncreaseModifier,
  increaseMax = 100,
  css,
  ...props
}) => {
  const [visible, setVisible] = useState(active);
  const [percentage, setPercentage] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (active && !visible) {
      setVisible(true);
      setPercentage(0);
    }

    if (!active && percentage !== 100) {
      setPercentage(100);

      if (timer.current) clearTimeout(timer.current);

      setTimeout(() => {
        setVisible(false);
      }, increaseMS * 2);
    }
  }, [active, setVisible, percentage, visible, increaseMS]);

  useEffect(() => {
    function increase(currPercentage: number) {
      const percentageProposition = increaseModifier(
        currPercentage,
        increaseMax
      );
      const newPercentage =
        percentageProposition > 100 ? 100 : percentageProposition;
      setPercentage(newPercentage);
      if (timer.current) clearTimeout(timer.current);

      if (newPercentage < 99) {
        timer.current = setTimeout(() => increase(newPercentage), increaseMS);
      }
    }

    if (active && percentage === 0) {
      increase(percentage);
    } else if (percentage >= 100 && timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  }, [
    setPercentage,
    percentage,
    increaseModifier,
    active,
    increaseMax,
    increaseMS,
  ]);

  return (
    <Line
      {...props}
      css={{
        width: `${percentage}%`,
        ...(!visible && { display: 'none' }),
        ...(css || {}),
      }}
    />
  );
};

export default LinearProgress;
