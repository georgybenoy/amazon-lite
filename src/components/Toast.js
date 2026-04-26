/**
 * Toast Component — Calm Commerce
 * 
 * Lightweight notification system. Call showToast() from anywhere.
 * Notifications auto-dismiss after 3 seconds with smooth animation.
 */

let container = null;

function ensureContainer() {
  if (container) return;
  container = document.createElement('div');
  container.className = 'toast-container';
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('role', 'status');
  document.body.appendChild(container);
}

/**
 * Show a toast notification.
 * @param {string} message — text to display
 * @param {'success'|'info'|'error'} type — controls icon
 */
export function showToast(message, type = 'success') {
  ensureContainer();

  const icons = {
    success: 'check_circle',
    info: 'info',
    error: 'error'
  };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined">${icons[type] || icons.success}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto dismiss after 3s
  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}
