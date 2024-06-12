import { useEffect, useState } from 'react';

export function useScrollY(): number {
  const isBrowser = typeof window !== 'undefined';

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(isBrowser ? window.scrollY : 0);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  return scrollY;
}
