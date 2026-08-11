import { useEffect } from 'react';

const colors = [
  ['#5f5143', '#d17609'],
  ['#7a5c4b', '#e88b10'],
  ['#8b684c', '#f99e14'],
  ['#6e4b3a', '#c16706'],
  ['#5f5143', '#d17609'],
];

function lerpColor(a, b, t) {
  const ah = parseInt(a.replace('#', ''), 16);
  const bh = parseInt(b.replace('#', ''), 16);

  const ar = ah >> 16;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;

  const br = bh >> 16;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;

  const rr = ar + t * (br - ar);
  const rg = ag + t * (bg - ag);
  const rb = ab + t * (bb - ab);

  return `rgb(${Math.round(rr)}, ${Math.round(rg)}, ${Math.round(rb)})`;
}

export default function useGradientBackground() {
  useEffect(() => {
    let colorIndex = 0;
    let step = 0;
    let shift = 0;
    const transitionSteps = 100;

    const previousBackground = document.body.style.background;
    const previousBackgroundSize = document.body.style.backgroundSize;
    const previousBackgroundPosition = document.body.style.backgroundPosition;

    const intervalId = setInterval(() => {
      const [start1, end1] = colors[colorIndex];
      const [start2, end2] = colors[(colorIndex + 1) % colors.length];
      const t = step / transitionSteps;

      const lerpedStart = lerpColor(start1, start2, t);
      const lerpedEnd = lerpColor(end1, end2, t);

      const angle = 120 + Math.sin(Date.now() / 2000) * 20;
      shift += 0.5;

      document.body.style.background = `linear-gradient(${angle}deg, ${lerpedStart}, ${lerpedEnd})`;
      document.body.style.backgroundSize = '200% 200%';
      document.body.style.backgroundPosition = `${Math.sin(shift / 50) * 50 + 50}% ${Math.cos(shift / 80) * 50 + 50}%`;

      step++;
      if (step >= transitionSteps) {
        step = 0;
        colorIndex = (colorIndex + 1) % colors.length;
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
      document.body.style.background = previousBackground;
      document.body.style.backgroundSize = previousBackgroundSize;
      document.body.style.backgroundPosition = previousBackgroundPosition;
    };
  }, []);
}
