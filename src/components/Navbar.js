/**
 * Navbar Component — Calm Commerce
 * 
 * Sticky header with:
 * - Scroll-shrink behavior
 * - Focus mode toggle
 * - Dark mode toggle
 * - Live cart badge (listens to 'cart-updated' event)
 * - Cart drawer trigger
 */

import { toggleDarkMode, isDark } from '../store/theme.js';
import { toggleFocusMode, isFocusActive } from '../store/focus.js';
import { getCartCount } from '../store/cart.js';
import { openCartDrawer } from './CartDrawer.js';

export function renderNavbar() {
  const header = document.createElement('header');
  header.className = 'navbar';
  header.id = 'main-navbar';

  header.innerHTML = `
    <div class="navbar-inner">
      <!-- Brand + Nav -->
      <div class="flex items-center gap-lg">
        <a href="#/" class="nav-brand" aria-label="Amazon Lite Home">Amazon Lite</a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="#/" class="nav-link active">Categories</a>
          <a href="#/" class="nav-link">Deals</a>
          <button class="nav-link" id="focus-toggle" aria-label="Toggle focus mode">
            <span class="material-symbols-outlined" style="font-size:18px">visibility_off</span>
            Focus Mode
          </button>
        </nav>
      </div>

      <!-- Search -->
      <div class="search-wrap focus-suppress">
        <span class="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          class="search-input"
          placeholder="Search with intent..."
          aria-label="Search products"
        />
      </div>

      <!-- Trailing Icons -->
      <div class="flex items-center gap-md">
        <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode">
          <span class="material-symbols-outlined">dark_mode</span>
        </button>
        <button class="icon-btn" aria-label="User account">
          <span class="material-symbols-outlined">person</span>
        </button>
        <button class="icon-btn" id="cart-toggle" aria-label="Open shopping cart">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span class="cart-badge" id="cart-badge">${getCartCount()}</span>
        </button>
      </div>
    </div>
  `;

  // ── Scroll shrink ──────────────────────────────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('shrunk', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });

  // ── Focus mode toggle ─────────────────────────────────
  const focusBtn = header.querySelector('#focus-toggle');
  focusBtn.addEventListener('click', () => {
    toggleFocusMode();
    const icon = focusBtn.querySelector('.material-symbols-outlined');
    if (isFocusActive()) {
      icon.textContent = 'visibility';
      focusBtn.classList.add('color-primary');
    } else {
      icon.textContent = 'visibility_off';
      focusBtn.classList.remove('color-primary');
    }
  });

  // ── Dark mode toggle ──────────────────────────────────
  const themeBtn = header.querySelector('#theme-toggle');
  themeBtn.addEventListener('click', () => {
    toggleDarkMode();
    const icon = themeBtn.querySelector('.material-symbols-outlined');
    icon.textContent = isDark() ? 'light_mode' : 'dark_mode';
  });

  // ── Cart badge live update ────────────────────────────
  const badge = header.querySelector('#cart-badge');
  window.addEventListener('cart-updated', () => {
    const count = getCartCount();
    badge.textContent = count;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  });

  // ── Cart drawer open ──────────────────────────────────
  header.querySelector('#cart-toggle').addEventListener('click', openCartDrawer);

  return header;
}
