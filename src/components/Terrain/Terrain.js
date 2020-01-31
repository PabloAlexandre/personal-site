import React, { useRef, useEffect } from 'react';
import P5 from 'p5';

import render from './render';
// import Terrain from './terrain';

const sketch = p5 => {
  
  let terrain;
  p5.setup = () => {
    p5.createCanvas(window.innerWidth + 300, 350, p5.WEBGL);
    terrain  = render(p5, 25);

    p5.smooth();
    p5.background('#fff');
    terrain();
  }

  p5.draw = () => {
    p5.background('#fff');
    terrain();
  }
}

const Terrain = () => {
  const ref = useRef(null);

  useEffect(() => {
    if(!ref.current) return;

    new P5(sketch, ref.current);
  }, [ref]);

  return (
    <div ref={ref} />
  );
};

export default Terrain;
