document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const candidates = document.querySelectorAll('h1, h2, h3, .project-detail-eyebrow');

  const targets = Array.from(candidates).filter((el) => {
    if (el.closest('.story-intro-stack')) return false;
    if (el.closest('.footer, .footer-column')) return false;
    return el.textContent.trim().length > 0;
  });

  if (!targets.length) return;

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

  targets.forEach((el) => {
    const source = el.cloneNode(true);
    const plan = [];
    buildTypingPlan(source, el, plan);
    el.textContent = '';
    el.dataset.typewriterPlanLength = String(plan.length);
    el.typewriterPlan = plan;
    el.classList.add('typewriter-pending');
  });

  const typeElement = (el) => {
    const plan = el.typewriterPlan;
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
});
