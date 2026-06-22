/**
 * Modal component props:
 * @param {boolean} isOpen - Initial open state.
 * @param {Function} onClose - Close handler in framework implementation.
 * @param {string} title - Modal title.
 * @param {string} children - Modal body markup.
 */
export function Modal({ isOpen = false, title, children }) {
  return `
    <div class="modal ${isOpen ? "is-open" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-backdrop"></div>
      <section class="modal-panel">
        <button class="icon-button close" data-modal-close aria-label="Close modal">×</button>
        <h2 id="modal-title">${title}</h2>
        ${children}
      </section>
    </div>
  `;
}
