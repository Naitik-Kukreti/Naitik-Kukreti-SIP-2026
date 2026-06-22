/**
 * Input component props:
 * @param {string} label - Field label.
 * @param {string} placeholder - Placeholder text.
 * @param {string} type - HTML input type.
 * @param {string} value - Current field value.
 * @param {string} error - Optional validation message.
 */
export function Input({ label, placeholder = "", type = "text", value = "", error = "" }) {
  const id = `field-${label.toLowerCase().replaceAll(" ", "-")}`;
  return `
    <label class="field" for="${id}">
      <span>${label}</span>
      <input id="${id}" type="${type}" placeholder="${placeholder}" value="${value}" />
      ${error ? `<small>${error}</small>` : ""}
    </label>
  `;
}
