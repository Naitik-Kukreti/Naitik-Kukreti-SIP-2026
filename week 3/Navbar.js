export function Navbar(theme) {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Dashboard", "/dashboard"],
    ["AI Planner", "/ai-planner"],
    ["Homestays", "/homestays"],
    ["UI", "/showcase"]
  ];

  return `
    <header class="navbar">
      <a class="brand" href="#/">
        <span class="brand-mark">YS</span>
        <span>Yatra Sathi</span>
      </a>
      <nav>
        ${links.map(([label, href]) => `<a href="#${href}">${label}</a>`).join("")}
      </nav>
      <button class="icon-button" data-theme-toggle aria-label="Toggle dark and light mode">
        ${theme === "dark" ? "☀" : "☾"}
      </button>
    </header>
  `;
}
