import { useEffect } from 'react';

export default function useMouseGradient() {
  useEffect(() => {
    let isActive = true;
    let ticking = false;
    let color = '#d17609';
    const intensity = 60;

    try {
      const stored = localStorage.getItem('bgSettings');
      if (stored) {
        const settings = JSON.parse(stored);
        color = settings.color || color;
      }
    } catch {
      // use default settings
    }

    const bg = document.createElement('div');
    bg.id = 'dynamic-bg';
    document.body.appendChild(bg);

    const handleMouseMove = (e) => {
      if (!ticking && isActive) {
        requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          bg.style.background = `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent ${intensity}%)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => {
      bg.style.background = `radial-gradient(circle at 50% 50%, ${color} 0%, transparent ${intensity}%)`;
    };

    const handleVisibilityChange = () => {
      isActive = !document.hidden;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0 && isActive) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 100;
        const y = (touch.clientY / window.innerHeight) * 100;
        bg.style.background = `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent ${intensity}%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchmove', handleTouchMove);
      bg.remove();
    };
  }, []);
}
