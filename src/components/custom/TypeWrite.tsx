import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { useTypeWriter } from '../../hooks/useTypeWriter';
export default function TypeWrite() {
  const [advice, setAdvice] = useState('');
  const typedText = useTypeWriter(advice);

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const dataReceived = await response.json();
    setAdvice(dataReceived.slip.advice);
  }
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl text-center bg-amber-900 text-white'>
        {typedText}
      </h1>
      <Button
        className='px-4 py-1 rounded-xl font-bold text-yellow-800'
        onClick={getAdvice}
      >
        Fetch More
      </Button>
    </div>
  );
}
