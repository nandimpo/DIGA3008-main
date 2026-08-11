import { useEffect } from 'react';

export default function useCursorPulse() {
  useEffect(() => {
    const cursor = document.getElementById('cursorPulse');
    if (!cursor) return;

    cursor.classList.add('cursor-pulse');

    let lastX = 0;
    let lastY = 0;
    let ticking = false;
    let isActive = true;
    let pulseAlpha = 0.4;
    let increasing = true;

    try {
      const stored = localStorage.getItem('cursorSettings');
      if (stored) {
        const settings = JSON.parse(stored);
        pulseAlpha = settings.alpha || 0.4;
      }
    } catch {
      // use default cursor settings
    }

    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!ticking && isActive) {
        requestAnimationFrame(() => {
          cursor.style.setProperty('--cursor-x', `${lastX}px`);
          cursor.style.setProperty('--cursor-y', `${lastY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    const intervalId = setInterval(() => {
      if (!isActive) return;
      pulseAlpha += increasing ? 0.02 : -0.02;
      if (pulseAlpha >= 0.6) increasing = false;
      if (pulseAlpha <= 0.2) increasing = true;
      cursor.style.setProperty('--cursor-opacity', pulseAlpha.toFixed(2));
    }, 50);

    const show = () => {
      isActive = true;
      cursor.classList.remove('hidden');
    };
    const hide = () => {
      isActive = false;
      cursor.classList.add('hidden');
    };
    const handleVisibilityChange = () => {
      isActive = !document.hidden;
    };
    const handleKeydown = (e) => {
      if (e.key === 'c' && !e.ctrlKey) {
        e.preventDefault();
        isActive = !isActive;
      }
      if (e.key === 'Escape') {
        pulseAlpha = 0.4;
        increasing = true;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      clearInterval(intervalId);
      try {
        localStorage.setItem('cursorSettings', JSON.stringify({ alpha: pulseAlpha }));
      } catch {
        // ignore save failures
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);
}
