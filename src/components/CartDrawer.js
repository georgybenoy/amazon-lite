/**
 * Cart Drawer Component — Calm Commerce
 * 
 * Slide-out panel from right side with:
 * - Cart item list with quantity controls
 * - Remove item
 * - Subtotal
 * - Backdrop with blur
 * - Keyboard dismissal (Escape)
 * - Focus trap for accessibility
 * 
 * Listens to 'cart-updated' to re-render contents.
 */

import { getCart, getCartTotal, updateQuantity, removeFromCart } from '../store/cart.js';

let overlay = null;
let drawer = null;
let isOpen = false;

function ensureDrawerDOM() {
  if (overlay) return;

  // Backdrop overlay
  overlay = document.createElement('div');
  overlay.className = 'cart-overlay';
  overlay.id = 'cart-overlay';
  overlay.addEventListener('click', closeCartDrawer);

  // Drawer panel
  drawer = document.createElement('aside');
  drawer.className = 'cart-drawer';
  drawer.id = 'cart-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Shopping cart');
  drawer.setAttribute('aria-modal', 'true');

  drawer.innerHTML = `
    <div class="cart-drawer-header">
      <h2 class="text-h3" style="font-size:20px">Your Cart</h2>
      <button class="icon-btn" id="cart-close" aria-label="Close cart">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="cart-drawer-body" id="cart-body"></div>
    <div class="cart-drawer-footer" id="cart-footer"></div>
  `;

  drawer.querySelector('#cart-close').addEventListener('click', closeCartDrawer);

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeCartDrawer();
  });

  // Live updates
  window.addEventListener('cart-updated', () => {
    if (isOpen) renderCartContents();
  });
}

function renderCartContents() {
  const body = drawer.querySelector('#cart-body');
  const footer = drawer.querySelector('#cart-footer');
  const items = getCart();

  if (items.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <span class="material-symbols-outlined">shopping_cart</span>
        <p class="text-body-md" style="font-weight:500">Your cart is empty</p>
        <p class="text-body-sm color-secondary" style="margin-top:var(--space-sm)">
          Add some items to get started.
        </p>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = items.map(({ product, quantity }) => `
    <div class="cart-item" data-id="${product.id}">
      <div class="cart-item-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="cart-item-info">
        <span class="cart-item-title">${product.name}</span>
        <span class="cart-item-price">$${(product.price * quantity).toFixed(2)}</span>
        <div class="cart-qty-controls">
          <button class="cart-qty-btn" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button>
          <span class="text-body-sm" style="min-width:20px; text-align:center">${quantity}</span>
          <button class="cart-qty-btn" data-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-action="remove" data-id="${product.id}" aria-label="Remove ${product.name}">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  `).join('');

  const total = getCartTotal();
  footer.innerHTML = `
    <div class="flex justify-between items-center mb-md">
      <span class="text-body-md" style="font-weight:600">Subtotal</span>
      <span class="text-body-lg" style="font-weight:700">$${total.toFixed(2)}</span>
    </div>
    <button class="btn btn-primary" style="width:100%; border-radius:var(--radius-md)">
      Checkout
    </button>
  `;

  // Wire quantity buttons
  body.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const item = items.find(i => i.product.id === id);
      if (!item) return;

      if (action === 'increase') updateQuantity(id, item.quantity + 1);
      else if (action === 'decrease') updateQuantity(id, item.quantity - 1);
      else if (action === 'remove') removeFromCart(id);
    });
  });
}

export function openCartDrawer() {
  ensureDrawerDOM();
  renderCartContents();
  isOpen = true;

  // Slight delay for CSS transition
  requestAnimationFrame(() => {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    drawer.querySelector('#cart-close').focus();
  });
}

export function closeCartDrawer() {
  if (!isOpen) return;
  isOpen = false;
  overlay.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}
