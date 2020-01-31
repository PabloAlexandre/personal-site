import { useState, useEffect } from 'react';

function getRandomLetters(letterQuantity) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return new Array(letterQuantity)
    .fill('')
    .map(() => letters[Math.floor(Math.random()*letters.length)]);
}

function useTextAnimation(texts, transitionDelay = 2000, speed = 70) {
  const [ text, setText ] = useState(texts[0]);
  const [ currentText, setCurrentText ] = useState('');

  useEffect(() => {
    const size = text.split(' ').join('').length;
    const sequence = new Array(size + 1)
      .fill('')
      .map((_, i) => getRandomLetters(i + 1));

    sequence[sequence.length -1] = text;

    let counter = 0;
    setCurrentText('');

    let timeout;
    const interval = setInterval(() => {
      setCurrentText(sequence[counter]);

      if(++counter === sequence.length) {
        clearInterval(interval);

        timeout = setTimeout(() => {
          const index = (texts.indexOf(text) + 1) % texts.length;
          setText(texts[index]);
        }, transitionDelay);
      }     
    }, speed);

    return () => {
      interval && clearInterval(interval);
      timeout && clearTimeout(timeout);
    };
    
  }, [speed, text, texts, transitionDelay]);

  return currentText;
}

export default useTextAnimation;