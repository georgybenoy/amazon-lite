/**
 * Home Page — Calm Commerce
 * 
 * Composes all sections into the home page layout.
 * Each section is a self-contained component returning DOM elements.
 */

import { renderHero } from '../components/Hero.js';
import { renderCategoryGrid } from '../components/CategoryGrid.js';
import { renderProductGrid } from '../components/ProductGrid.js';
import { renderFeatureSection } from '../components/FeatureSection.js';
import { renderFooter } from '../components/Footer.js';
import { initScrollAnimations } from '../utils/observer.js';

export function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // clear previous route content

  const main = document.createElement('main');
  main.id = 'main-content';
  main.style.paddingTop = '64px'; // offset for fixed navbar

  // Compose page sections
  main.appendChild(renderHero());
  main.appendChild(renderCategoryGrid());
  main.appendChild(renderProductGrid());
  main.appendChild(renderFeatureSection());

  app.appendChild(main);
  app.appendChild(renderFooter());

  // FAB
  const fab = document.createElement('div');
  fab.className = 'fab focus-suppress';
  fab.innerHTML = `
    <button aria-label="Help">
      <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">help</span>
    </button>
  `;
  app.appendChild(fab);

  // Initialize scroll animations after DOM is populated
  requestAnimationFrame(() => initScrollAnimations());

  // Re-init after products finish rendering (skeleton → real cards)
  window.addEventListener('products-rendered', () => {
    requestAnimationFrame(() => initScrollAnimations());
  }, { once: true });
}
