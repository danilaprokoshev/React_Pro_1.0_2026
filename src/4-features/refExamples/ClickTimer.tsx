import { useRef } from 'react';

interface ClickData {
  startTime: number | null;
  clickCount: number;
}

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const currentTime = Date.now();

    if (clickDataRef.current.startTime === null) {
      clickDataRef.current.startTime = currentTime;
      clickDataRef.current.clickCount = 1;
      console.log('Первый клик зафиксирован!');
    } else {
      clickDataRef.current.clickCount += 1;
      const timeDiff = currentTime - clickDataRef.current.startTime;
      console.log(`Разница во времени: ${timeDiff}ms`);
      console.log(
        `Общее количество кликов: ${clickDataRef.current.clickCount}`
      );
    }
  };

  return <button onClick={handleClick}>Кликни меня</button>;
}
