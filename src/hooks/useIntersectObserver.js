import { useEffect, useState } from 'react';

export default function useIntersectObserver(element) {
  const [ percentage, setPercentage ] = useState(0);

  function callback(e) {
    if(element) {
      const { y, height } = element.getBoundingClientRect();
      const halfSize = height / 2;

      const min = -((y - halfSize) - height);
      const max = (height * 2) + halfSize;
      const diff = min / max;

      setPercentage(Math.min(Math.max(diff, 0), 1));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  });

  // function callback(entries) {
  //   const { boundingClientRect } = entries[0];
  //   const halfSize = boundingClientRect.height / 2;
  //   const percentage = ((halfSize - boundingClientRect.top) / halfSize) / 2;

  //   const intersectPercentage = Math.min(Math.max(0, percentage), 1);
  //   console.log(intersectPercentage);
  //   setPercentage(intersectPercentage);
  // }

  // useEffect(() => {
  //   if(!element) return;

  //   const options = {
  //     root: document.getElementById('#id'),
  //     rootMargin: '0px',
  //     threshold: [...Array(100).keys()].map(x => x / 100)
  //   };

  //   observer.observe(element);

  //   return () => {
  //     observer.unobserve();
  //   }
  // }, [ element ]);

  // return percentage;

  return percentage;
}