/**
 * ProductCard Component — Calm Commerce
 * 
 * Reusable card that accepts a product object and renders:
 * - Lazy-loaded image with skeleton placeholder
 * - Optional badge
 * - Title, category, price
 * - "Add to Cart" button wired to cart store + toast
 * 
 * @param {object} product
 * @returns {HTMLElement}
 */

import { addToCart } from '../store/cart.js';
import { showToast } from './Toast.js';

export function renderProductCard(product) {
  const article = document.createElement('article');
  article.className = 'card animate-on-scroll';
  article.id = `product-${product.id}`;

  // Badge HTML
  const badgeHTML = product.badge
    ? `<span class="badge badge-${product.badgeType}">${product.badge}</span>`
    : '';

  article.innerHTML = `
    <div class="card-image-wrap">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      />
      ${badgeHTML}
    </div>
    <div class="card-body">
      <div class="flex justify-between items-center mb-sm">
        <div>
          <h3 style="font-weight:600; font-size:var(--text-body-md-size)">${product.name}</h3>
          <p class="text-body-sm color-secondary">${product.category}</p>
        </div>
        <span class="color-primary" style="font-weight:600">$${product.price.toFixed(2)}</span>
      </div>
      <button class="btn btn-cart" aria-label="Add ${product.name} to cart">
        <span class="material-symbols-outlined" style="font-size:18px">add_shopping_cart</span>
        Add to Cart
      </button>
    </div>
  `;

  // Wire add-to-cart
  const cartBtn = article.querySelector('.btn-cart');
  cartBtn.addEventListener('click', () => {
    addToCart(product);
    showToast(`${product.name} added to cart`, 'success');
    
    // Micro-interaction: brief press feedback
    cartBtn.style.transform = 'scale(0.95)';
    setTimeout(() => { cartBtn.style.transform = ''; }, 150);
  });

  return article;
}
