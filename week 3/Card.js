export function Card({ title, description, image, meta }) {
  return `
    <article class="card">
      <img src="${image}" alt="${title}" />
      <div class="card-body">
        <span>${meta || "Recommended"}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="#/homestays">View details</a>
      </div>
    </article>
  `;
}
