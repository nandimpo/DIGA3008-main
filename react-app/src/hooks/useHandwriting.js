import { useEffect } from 'react';

export default function useHandwriting() {
  useEffect(() => {
    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');

    const mainTimer = setTimeout(() => {
      mainTitle?.classList.add('title-animate-in');
    }, 200);

    const subTimer = setTimeout(() => {
      subTitle?.classList.add('title-animate-in');
    }, 600);

    const highlightTitle = () => {
      if (mainTitle) mainTitle.style.color = '#E1B808';
    };
    const resetTitleColor = () => {
      if (mainTitle) mainTitle.style.color = '';
    };

    mainTitle?.addEventListener('mouseover', highlightTitle);
    mainTitle?.addEventListener('mouseout', resetTitleColor);
    mainTitle?.addEventListener('touchstart', highlightTitle);

    let observer;
    if (subTitle) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('title-animate-in');
          }
        });
      });
      observer.observe(subTitle);
    }

    return () => {
      clearTimeout(mainTimer);
      clearTimeout(subTimer);
      mainTitle?.removeEventListener('mouseover', highlightTitle);
      mainTitle?.removeEventListener('mouseout', resetTitleColor);
      mainTitle?.removeEventListener('touchstart', highlightTitle);
      observer?.disconnect();
    };
  }, []);
}
