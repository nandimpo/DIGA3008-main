import { useEffect } from 'react';

export default function useCardEntrance() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(60px) scale(0.95)';
      card.style.transition = 'opacity 0.8s ease-out, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
}
