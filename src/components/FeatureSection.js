/**
 * Feature Section Component — Calm Commerce
 * 
 * Bento-style grid highlighting sustainability, delivery, and
 * purchase protection features. Uses the brand's signature
 * muted orange tint for the hero card.
 * 
 * Note: This section uses its OWN IntersectionObserver instead of
 * the shared animate-on-scroll system, because it renders at the
 * bottom of the page and needs guaranteed visibility triggering.
 */

export function renderFeatureSection() {
  const section = document.createElement('section');
  section.className = 'section-padding-xxl container focus-suppress';
  section.setAttribute('aria-label', 'Platform features');

  const grid = document.createElement('div');
  grid.className = 'grid-features';

  grid.innerHTML = `
    <!-- Main feature card -->
    <div class="feature-main feature-animate">
      <div style="position:relative; z-index:10; max-width:380px">
        <h2 class="text-h2 mb-md">Sustainability first. Always.</h2>
        <p class="color-secondary text-body-md mb-lg">
          Our Climate Pledge Friendly badge ensures you're making choices that support a healthier planet.
        </p>
        <button class="btn btn-ghost" style="padding-left:0; gap:var(--space-sm)">
          <span style="font-weight:600">Our Commitment</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <img
        class="feature-main-bg"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw5EBiS25N4DeY-QHw15j3J8J7skBXcH_mGbj81ofx1HUcXm-X3GzxI8wQZc_XPl6UA8TTNopjQoO8Dis6HKTVGGbv4Mt4mwUkTX_a55XhgWseCjEVMeR8Qf8c3rff0TqvDCN0omGevoTLHTQL32iaGHLRL2hAvXVdhgKqPd6tg4fU_XS4KhKeiFZDE7wEMrvQgnEHzLw9E45WHzfMjXYgl5C6oo-4NWe5BWzMdYC4nOX9SZ8vaU9ZUVC-POqsLZqBfyNNm4vaZ81V"
        alt="Greenery representing sustainability"
        loading="lazy"
      />
    </div>

    <!-- Fast delivery card -->
    <div class="feature-card feature-card-light feature-animate">
      <span class="material-symbols-outlined color-primary" style="font-size:40px">bolt</span>
      <div>
        <h3 style="font-weight:700; font-size:var(--text-body-lg-size)">Fast as Light</h3>
        <p class="text-body-sm color-secondary">Next-day delivery, refined for efficiency.</p>
      </div>
    </div>

    <!-- Protection card (always dark, regardless of theme) -->
    <div class="feature-card feature-card-dark feature-animate">
      <span class="material-symbols-outlined" style="font-size:40px; color:#FF9900">shield</span>
      <div>
        <h3 style="font-weight:700; font-size:var(--text-body-lg-size); color:#ffffff">Safe Passage</h3>
        <p class="text-body-sm" style="color:#9ca3af">Guaranteed protection for every purchase.</p>
      </div>
    </div>
  `;

  section.appendChild(grid);

  // Self-contained IntersectionObserver for this section.
  // This guarantees the cards become visible regardless of when
  // the global initScrollAnimations() runs.
  requestAnimationFrame(() => {
    const cards = grid.querySelectorAll('.feature-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    cards.forEach(el => observer.observe(el));
  });

  return section;
}
