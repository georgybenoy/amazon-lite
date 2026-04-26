/**
 * Theme Store — Calm Commerce
 * 
 * Toggles .dark class on <html> and persists to localStorage.
 * On first visit, respects system preference via prefers-color-scheme.
 */

const STORAGE_KEY = 'calm-commerce-theme';

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const theme = stored || getSystemPreference();
  applyTheme(theme);
}

export function toggleDarkMode() {
  const next = isDark() ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
}

export function isDark() {
  return document.documentElement.classList.contains('dark');
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
