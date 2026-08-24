import { useEffect } from 'react';

const SELECTOR = 'h1, h2, h3, .project-detail-eyebrow';

// Survives React StrictMode's dev-only setup -> cleanup -> setup double-invoke,
// which otherwise clears an element's text on the first pass and leaves nothing
// to type on the second, so the heading renders permanently blank.
const originalContentCache = new WeakMap();

function buildTypingPlan(sourceNode, targetParent, plan) {
  Array.from(sourceNode.childNodes).forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      const textNode = document.createTextNode('');
      plan.push({ type: 'append', target: targetParent, node: textNode });
      Array.from(child.textContent).forEach((ch) => {
        plan.push({ type: 'type', node: textNode, char: ch });
      });
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const shell = child.cloneNode(false);
      plan.push({ type: 'append', target: targetParent, node: shell });
      buildTypingPlan(child, shell, plan);
    }
  });
}

export default function useTypewriter(dependency) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const candidates = document.querySelectorAll(SELECTOR);

    const targets = Array.from(candidates).filter((el) => {
      if (el.closest('.story-intro-stack')) return false;
      if (el.closest('.footer, .footer-column')) return false;
      return el.textContent.trim().length > 0;
    });

    if (!targets.length) return;

    const plans = new Map();

    targets.forEach((el) => {
      let source = originalContentCache.get(el);
      if (!source) {
        source = el.cloneNode(true);
        originalContentCache.set(el, source);
      }
      const plan = [];
      buildTypingPlan(source.cloneNode(true), el, plan);
      el.textContent = '';
      plans.set(el, plan);
      el.classList.add('typewriter-pending');
    });

    const timers = [];

    const typeElement = (el) => {
      const plan = plans.get(el);
      if (!plan || !plan.length) return;

      el.classList.remove('typewriter-pending');
      el.classList.add('typewriter-active');

      const charCount = plan.filter((step) => step.type === 'type').length || 1;
      const speed = Math.max(35, Math.min(70, 1400 / charCount));

      let i = 0;
      const interval = setInterval(() => {
        const step = plan[i];
        if (step) {
          if (step.type === 'append') {
            step.target.appendChild(step.node);
          } else if (step.type === 'type') {
            step.node.textContent += step.char;
          }
        }
        i++;
        if (i >= plan.length) {
          clearInterval(interval);
          el.classList.remove('typewriter-active');
        }
      }, speed);

      timers.push(interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach(clearInterval);
    };
  }, [dependency]);
}
