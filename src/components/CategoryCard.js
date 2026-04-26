/**
 * CategoryCard Component — Calm Commerce
 * 
 * Renders a single category tile with Material icon and label.
 * @param {{ name: string, icon: string }} category
 * @returns {HTMLElement}
 */

export function renderCategoryCard(category) {
  const tile = document.createElement('div');
  tile.className = 'category-tile animate-on-scroll';
  tile.setAttribute('role', 'link');
  tile.setAttribute('tabindex', '0');
  tile.setAttribute('aria-label', `Browse ${category.name}`);

  tile.innerHTML = `
    <span class="material-symbols-outlined icon">${category.icon}</span>
    <span class="label">${category.name}</span>
  `;

  // Keyboard activation
  tile.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tile.click();
    }
  });

  return tile;
}
