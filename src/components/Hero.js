/**
 * Hero Component — Calm Commerce
 * 
 * Full-width hero banner with background image, gradient overlay,
 * label, headline, description, and CTA button.
 */

export function renderHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.setAttribute('aria-label', 'Featured promotion');

  section.innerHTML = `
    <div class="hero-bg">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiPkk1nOspIaTgnAi_hfUzi6mwagnpKnnBHC8IqJ7M33pxWFA5ogudZJnCWf_JZZWvkBBg-o-0a2gvKN-A8s3gsRAppTANCSl2zeRGxoHLpH9OB3Z53J4ZtVrh0fueV4DpLX9Xgd05X6AC5hR86tPDl1vFBX_X4OIh5axNFTCiXrzdAue88_wOSPvLBSBE2uG3qU14DMXdotJibpJX4GXDZvVd_yYVO5vH7SMLBxworrv42eDc5Qn25xTLk3CsbkH4lhREpUtIsoR2"
        alt="Minimalist product display"
        loading="lazy"
      />
      <div class="hero-gradient"></div>
    </div>
    <div class="container" style="width:100%">
      <div class="hero-content animate-on-scroll">
        <span class="text-label-caps color-surface-tint mb-md" style="display:block">Summer Collections</span>
        <h1 class="text-h1 mb-lg">Intentional Living. Simple Choices.</h1>
        <p class="text-body-lg color-secondary mb-lg">
          Discover a curated selection of essentials designed to bring clarity to your daily life.
        </p>
        <button class="btn btn-primary">Explore All</button>
      </div>
    </div>
  `;

  return section;
}
