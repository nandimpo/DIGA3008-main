import { useEffect } from 'react';

const config = {
  initialOffset: '40px',
  finalTransform: 'translateY(0)',
  finalOpacity: 1,
  duration: '0.6s',
  stagger: 200,
};

export default function useCardFadeIn() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.inspiration-block');
    const timers = [];

    blocks.forEach((block, index) => {
      block.style.opacity = 0;
      block.style.transform = `translateY(${config.initialOffset})`;
      block.style.transition = `opacity ${config.duration} ease-out, transform ${config.duration} ease-out`;

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
