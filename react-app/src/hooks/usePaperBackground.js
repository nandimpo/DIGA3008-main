import { useEffect } from 'react';

export default function usePaperBackground() {
  useEffect(() => {
    const previousBackground = document.body.style.background;
    document.body.style.background = '#F7F2E4';

    return () => {
      document.body.style.background = previousBackground;
    };
  }, []);
}
