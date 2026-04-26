/**
 * Focus Mode Store — Calm Commerce
 * 
 * Toggles .focus-mode-active on <body> which fades out
 * non-essential UI sections marked with .focus-suppress.
 */

let active = false;

export function toggleFocusMode() {
  active = !active;
  document.body.classList.toggle('focus-mode-active', active);
  window.dispatchEvent(new CustomEvent('focus-mode-changed', { detail: { active } }));
}

export function isFocusActive() {
  return active;
}
