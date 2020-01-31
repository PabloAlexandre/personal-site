export default function draw(p5, squareSize) {
  const { width, height } = p5;
  const maxNoise = 120;
  const amount = 0.2;
  
  const size = {
    w: Math.ceil(width / squareSize),
    h:  Math.ceil(height / squareSize)
  };

  let x = 0;
  const terrain = new Array(size.w).fill('').map(() => {
    let y = 100;
    const arr = new Array(size.h)
      .fill('')
      .map(() => {
        y += amount;
        return p5.map(p5.noise(x, y), 0, 1, -maxNoise, maxNoise)
      });

    x += amount;
    return arr;
  });

  let colorWheel = 0;

  return () => {
    colorWheel += amount;
    const color = p5.color(`hsl(${Math.ceil(colorWheel) % 360}, 40%, 55%)`);

    p5.stroke(color);
    p5.rotateX(Math.PI / 3);
    p5.translate(-width / 2 , -height / 2.9);
  
    for (let i = 0; i < size.h -1; i++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
  
      for (let j = 0; j < size.w; j++) {
        p5.vertex(j * squareSize, i * squareSize, terrain[j][i]);
        p5.vertex(j * squareSize, (i + 1) * squareSize, terrain[j][i + 1]);
      }
  
      p5.endShape();
    }
  }
}