/**
 * ProductGrid Component — Calm Commerce
 * 
 * Renders skeleton loading placeholders first, then maps the
 * product dataset through ProductCard. Wrapped in a responsive
 * CSS grid with section heading.
 */

import { products } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

/**
 * Generate a single skeleton card HTML string.
 */
function skeletonCard() {
  return `
    <div class="skeleton-card">
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-text">
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-btn"></div>
      </div>
    </div>
  `;
}

export function renderProductGrid() {
  const section = document.createElement('section');
  section.className = 'section-padding';
  section.style.backgroundColor = 'var(--color-surface-container-lowest)';
  section.setAttribute('aria-label', 'Product listings');

  const inner = document.createElement('div');
  inner.className = 'container';

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.className = 'mb-lg';
  headerDiv.innerHTML = `
    <h2 class="text-h2 mb-xs">Essentials for You</h2>
    <p class="color-secondary text-body-md">Hand-picked items that align with your lifestyle.</p>
  `;

  // Grid container
  const grid = document.createElement('div');
  grid.className = 'grid-products stagger-children';
  grid.id = 'product-grid';

  // Show skeletons first
  grid.innerHTML = Array(8).fill('').map(() => skeletonCard()).join('');

  inner.appendChild(headerDiv);
  inner.appendChild(grid);
  section.appendChild(inner);

  // Simulate brief load to show skeleton effect, then render real cards
  requestAnimationFrame(() => {
    setTimeout(() => {
      grid.innerHTML = '';
      products.forEach(product => {
        grid.appendChild(renderProductCard(product));
      });
      // Trigger scroll animations after cards are in DOM
      window.dispatchEvent(new CustomEvent('products-rendered'));
    }, 400); // 400ms skeleton flash — just enough to see the shimmer
  });

  return section;
}
