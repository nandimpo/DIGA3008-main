import { useEffect } from 'react';

const config = {
  expandHeight: '500px',
  speed: '0.4s',
};

export default function useDropdownAnimation() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.read-more-btn');

    const handleClick = (button) => () => {
      const dropdown = button.nextElementSibling;
      if (!dropdown) return;

      const isExpanded = dropdown.style.maxHeight && dropdown.style.maxHeight !== '0px';

      dropdown.style.transition = `max-height ${config.speed} ease, opacity ${config.speed} ease`;
      if (isExpanded) {
        dropdown.style.maxHeight = '0px';
        dropdown.style.opacity = 0;
      } else {
        dropdown.style.maxHeight = config.expandHeight;
        dropdown.style.opacity = 1;
      }
    };

    const listeners = [];
    buttons.forEach((button) => {
      const listener = handleClick(button);
      button.addEventListener('click', listener);
      listeners.push([button, listener]);
    });

    return () => {
      listeners.forEach(([button, listener]) => button.removeEventListener('click', listener));
    };
  }, []);
}
