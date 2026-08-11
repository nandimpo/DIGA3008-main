import { useEffect } from 'react';

const SELECTORS = '.image-container, .blog-post, .recent-item, .design-box, .featured-work, .skills-section, .skills-box, .languages-box';

export default function useScrollReveal(dependency) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const targets = document.querySelectorAll(SELECTORS);
    if (!targets.length) return;

    const groups = new Map();
    targets.forEach((el) => {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    const easing = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

    groups.forEach((siblings) => {
      siblings.forEach((el, index) => {
        const delay = Math.min(index, 8) * 0.1;
        el.style.opacity = 0;
        el.style.transform = 'translateY(3rem) scale(0.94)';
        el.style.transition = `opacity 0.7s ease-out ${delay}s, transform 0.75s ${easing} ${delay}s`;
      });
    });

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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]);
}
