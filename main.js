/**
 * Main Entry Point — Calm Commerce
 * 
 * Bootstraps the application:
 * 1. Initializes theme (dark mode)
 * 2. Renders the persistent navbar
 * 3. Sets up hash-based router
 * 4. Renders initial route
 *
 * Architecture: Vanilla JS ES Modules — no framework, no bundler.
 * Each component owns its own DOM creation, event wiring, and cleanup.
 */

import { initTheme } from './src/store/theme.js';
import { renderNavbar } from './src/components/Navbar.js';
import { addRoute, initRouter } from './src/utils/router.js';
import { renderHome } from './src/pages/Home.js';

// ── 1. Theme ─────────────────────────────────────────────
initTheme();

// ── 2. Persistent Navbar ─────────────────────────────────
// Navbar is outside #app since it persists across routes
document.body.prepend(renderNavbar());

// ── 3. Register Routes ───────────────────────────────────
addRoute('/', renderHome);
// Future routes:
// addRoute('/deals', renderDeals);
// addRoute('/product/:id', renderProductDetail);

// ── 4. Boot Router ───────────────────────────────────────
initRouter();
