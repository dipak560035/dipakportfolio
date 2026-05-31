// import { useEffect } from 'react';

// export const useScrollReveal = () => {
//   useEffect(() => {
//     const observerOptions = {
//       root: null, // Viewport
//       rootMargin: '0px',
//       threshold: 0.1, // Trigger when 10% of element is visible
//     };

//     const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           // Once animated, we can stop observing it
//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);
//     const revealElements = document.querySelectorAll('.reveal');

//     revealElements.forEach((el) => observer.observe(el));

//     return () => {
//       revealElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);
// };












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