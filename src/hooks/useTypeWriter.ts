import { useEffect, useState } from 'react';
export function useTypeWriter(text: string, speed: number = 40) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    if (!text) return;

    let i = 0;

    const last = performance.now();

    function frame(now: number) {
      if (now - last >= speed) {
        setDisplayed((prevText) => prevText + text[i]);
        i++;
        now = last;
      }
      
      if (i < text.length) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }, [text, speed]);

  return displayed;
}
