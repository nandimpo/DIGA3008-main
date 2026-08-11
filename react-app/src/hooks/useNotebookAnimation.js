import { useEffect } from 'react';

const config = {
  initialOffset: '40px',
  speed: '0.8s',
  mainDelay: 200,
  subDelay: 600,
};

export default function useNotebookAnimation() {
  useEffect(() => {
    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');
    const timers = [];

    if (mainTitle) {
      mainTitle.style.opacity = 0;
      mainTitle.style.transform = `translateY(${config.initialOffset})`;
      mainTitle.style.transition = `opacity ${config.speed} ease-out, transform ${config.speed} ease-out`;

      timers.push(
        setTimeout(() => {
          mainTitle.style.opacity = 1;
          mainTitle.style.transform = 'translateY(0)';
        }, config.mainDelay)
      );
    }

    if (subTitle) {
      subTitle.style.opacity = 0;
      subTitle.style.transform = `translateY(${config.initialOffset})`;
      subTitle.style.transition = `opacity ${config.speed} ease-out, transform ${config.speed} ease-out`;

      timers.push(
        setTimeout(() => {
          subTitle.style.opacity = 1;
          subTitle.style.transform = 'translateY(0)';
        }, config.subDelay)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, []);
}
