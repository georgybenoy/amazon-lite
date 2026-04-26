/**
 * Footer Component — Calm Commerce
 * 
 * Minimal footer with copyright and navigation links.
 */

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-copy">
        © ${new Date().getFullYear()} Amazon Lite. Designed for Calm Commerce.
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="#/" class="footer-link">Accessibility</a>
        <a href="#/" class="footer-link">Privacy Policy</a>
        <a href="#/" class="footer-link">Sustainability</a>
      </nav>
    </div>
  `;

  return footer;
}
