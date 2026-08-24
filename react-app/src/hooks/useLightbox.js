import { useEffect, useRef, useState } from 'react';

export default function useLightbox() {
  const [image, setImage] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (overlayRef.current && overlayRef.current.contains(event.target)) return;
      const img = event.target.closest('img');
      if (!img) return;
      event.preventDefault();
      event.stopPropagation();
      setImage({ src: img.currentSrc || img.src, alt: img.alt || '' });
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('lightbox-open', Boolean(image));
  }, [image]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setImage(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const close = () => setImage(null);

  return { image, overlayRef, close };
}
