/**
 * Toast component props:
 * @param {string} message - Notification content.
 * @param {"success"|"info"|"error"} type - Notification style.
 */
export function Toast(message = "") {
  return `<div class="toast" role="status" aria-live="polite">${message}</div>`;
}
