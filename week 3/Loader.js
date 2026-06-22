/**
 * Loader component props:
 * @param {string} label - Accessible loading label.
 */
export function Loader(label = "Loading") {
  return `
    <div class="loader-wrap" role="status" aria-live="polite">
      <span class="loader"></span>
      <span>${label}</span>
    </div>
  `;
}
