/**
 * CategoryGrid Component — Calm Commerce
 * 
 * Maps the categories dataset through CategoryCard and wraps
 * in a responsive grid with section heading.
 */

import { categories } from '../data/categories.js';
import { renderCategoryCard } from './CategoryCard.js';

export function renderCategoryGrid() {
  const section = document.createElement('section');
  section.className = 'section-padding container focus-suppress';
  section.setAttribute('aria-label', 'Product categories');

  // Header row
  const headerRow = document.createElement('div');
  headerRow.className = 'flex items-center justify-between mb-lg';
  headerRow.innerHTML = `
    <h2 class="text-h3">Curated Categories</h2>
    <a href="#/" class="color-primary text-body-sm" style="font-weight:500">View all</a>
  `;

  // Grid
  const grid = document.createElement('div');
  grid.className = 'grid-categories stagger-children';

  categories.forEach(cat => {
    grid.appendChild(renderCategoryCard(cat));
  });

  section.appendChild(headerRow);
  section.appendChild(grid);

  return section;
}
