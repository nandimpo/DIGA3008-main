import { useEffect } from 'react';

const config = {
  initialOffset: '60px',
  finalTransform: 'translateY(0) scale(1)',
  finalOpacity: 1,
  duration: '0.7s',
  transformDuration: '0.8s',
  stagger: 250,
};

export default function useCardFadeIn() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.inspiration-block');
    const timers = [];

    blocks.forEach((block, index) => {
      block.style.opacity = 0;
      block.style.transform = `translateY(${config.initialOffset}) scale(0.95)`;
      block.style.transition = `opacity ${config.duration} ease-out, transform ${config.transformDuration} cubic-bezier(0.34, 1.56, 0.64, 1)`;

      timers.push(
        setTimeout(() => {
          block.style.opacity = config.finalOpacity;
          block.style.transform = config.finalTransform;
        }, index * config.stagger)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);
}
