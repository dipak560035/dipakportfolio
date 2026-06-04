
import { useEffect } from 'react';

// Accept dependencies to re-run the observer when needed (like route changes)
export const useScrollReveal = (deps: React.DependencyList = []) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    // IMPORTANT: run after DOM paint
    const raf = requestAnimationFrame(() => {
      observe();
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, deps);
};





