/**
 * Cart Store — Calm Commerce
 * 
 * Module-scoped state with event-driven updates.
 * Persists to localStorage and fires 'cart-updated' CustomEvent
 * on every mutation so UI components can react.
 */

const STORAGE_KEY = 'calm-commerce-cart';

/** @type {Array<{product: object, quantity: number}>} */
let items = [];

// ── Hydrate from localStorage on module load ──────────────
function hydrate() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) items = JSON.parse(stored);
  } catch {
    items = [];
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function notify() {
  persist();
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: { items } }));
}

// ── Public API ────────────────────────────────────────────

export function addToCart(product) {
  const existing = items.find(i => i.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    items.push({ product, quantity: 1 });
  }
  notify();
}

export function removeFromCart(productId) {
  items = items.filter(i => i.product.id !== productId);
  notify();
}

export function updateQuantity(productId, qty) {
  const item = items.find(i => i.product.id === productId);
  if (!item) return;
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  item.quantity = qty;
  notify();
}

export function getCart() {
  return [...items];
}

export function getCartCount() {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function getCartTotal() {
  return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export function clearCart() {
  items = [];
  notify();
}

// ── Initialize ────────────────────────────────────────────
hydrate();
