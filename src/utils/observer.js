/**
 * Scroll Animation Observer — Calm Commerce
 * 
 * Uses IntersectionObserver to add a 'visible' class to elements
 * with '.animate-on-scroll' when they enter the viewport.
 * Observes once then disconnects per element for performance.
 */

export function initScrollAnimations(root = document) {
  const elements = root.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
}
