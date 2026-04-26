/**
 * Hash-based SPA Router — Calm Commerce
 * 
 * Minimal router that maps hash paths to page render functions.
 * Supports: navigate(), onRouteChange(), and back-button handling.
 */

const routes = {};
let currentRoute = null;

/**
 * Register a route.
 * @param {string} path  — e.g. '/' or '/deals'
 * @param {Function} handler  — render function to call
 */
export function addRoute(path, handler) {
  routes[path] = handler;
}

/**
 * Navigate programmatically.
 * @param {string} path 
 */
export function navigate(path) {
  window.location.hash = '#' + path;
}

/**
 * Resolve the current hash to a route path.
 */
function resolvePath() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

/**
 * Run the handler for the current route.
 */
function handleRoute() {
  const path = resolvePath();
  if (path === currentRoute) return;
  currentRoute = path;

  const handler = routes[path] || routes['/'];
  if (handler) handler();
}

/**
 * Initialize the router — call once on app bootstrap.
 */
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // initial render
}
