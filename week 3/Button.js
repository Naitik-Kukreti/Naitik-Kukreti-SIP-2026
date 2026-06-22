/**
 * Button component props:
 * @param {string} label - Visible button text.
 * @param {"primary"|"secondary"|"outline"} variant - Visual style.
 * @param {"sm"|"md"|"lg"} size - Button size.
 * @param {boolean} disabled - Disables interaction.
 * @param {string} attrs - Optional raw data attributes for demo bindings.
 */
export function Button({ label, variant = "primary", size = "md", disabled = false, attrs = "" }) {
  return `<button class="btn ${variant} ${size}" ${disabled ? "disabled" : ""} ${attrs}>${label}</button>`;
}
