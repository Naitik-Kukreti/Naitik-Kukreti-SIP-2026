import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Card } from "./components/Card.js";
import { Footer } from "./components/Footer.js";
import { Button, Input, Modal, Toast, Loader } from "./components/ui/index.js";

const app = document.querySelector("#app");

const destinations = [
  {
    title: "Kumaon Village Homestay",
    description: "A peaceful mountain stay with local meals, nature walks, and community-led cultural experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    meta: "From ₹1,800/night"
  },
  {
    title: "Garhwal Eco Trail",
    description: "Ideal for trekking lovers seeking responsible travel, guided trails, and low-impact stays.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    meta: "3-5 day itinerary"
  },
  {
    title: "Organic Farm Retreat",
    description: "Stay with a host family, learn local farming practices, and enjoy authentic Uttarakhand cuisine.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    meta: "Best for families"
  }
];

const activities = [
  "Village walks",
  "Local food trails",
  "Bird watching",
  "Trekking",
  "Cultural workshops",
  "Yoga and wellness"
];

function getTheme() {
  return localStorage.getItem("theme") || "light";
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.dataset.theme = theme;
}

function layout(content) {
  return `
    ${Navbar(getTheme())}
    <main>${content}</main>
    ${Footer()}
  `;
}

function HomePage() {
  return layout(`
    ${Hero()}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Recommended experiences</p>
        <h2>Eco-stays and slow travel plans picked for you</h2>
        <p>Yatra Sathi blends traveler preferences with local knowledge to recommend responsible homestays, activities, and day-wise plans.</p>
      </div>
      <div class="card-grid">
        ${destinations.map((item) => Card(item)).join("")}
      </div>
    </section>
    <section class="split-section">
      <div>
        <p class="eyebrow">Why Yatra Sathi?</p>
        <h2>Better trips for travelers, better visibility for local hosts.</h2>
        <p>The platform supports sustainable travel by highlighting locally-owned stays and authentic experiences beyond crowded tourist circuits.</p>
      </div>
      <div class="feature-list">
        ${["Personalized itinerary suggestions", "Budget-aware homestay matching", "Direct host discovery", "Responsible tourism focus"].map((x) => `<span>${x}</span>`).join("")}
      </div>
    </section>
  `);
}

function AboutPage() {
  return layout(`
    <section class="page-hero">
      <p class="eyebrow">About</p>
      <h1>Community-first travel planning for Uttarakhand.</h1>
      <p>Yatra Sathi helps travelers discover sustainable stays and authentic local experiences while giving homestay owners a stronger digital presence.</p>
    </section>
    <section class="section compact">
      <h2>Project objectives</h2>
      <div class="two-column">
        ${["Recommend personalized homestays and itineraries.", "Promote eco-friendly and responsible tourism.", "Help local owners reach travelers directly.", "Suggest activities based on budget, interests, and duration."].map((x) => `<article class="info-tile">${x}</article>`).join("")}
      </div>
    </section>
  `);
}

function DashboardPage() {
  return layout(`
    <section class="page-hero dashboard-hero">
      <div>
        <p class="eyebrow">Dashboard</p>
        <h1>Your sustainable travel command center.</h1>
        <p>Track saved homestays, trip budget, activity preferences, and recommendation readiness.</p>
      </div>
      ${Loader("Matching your preferences")}
    </section>
    <section class="stats-grid">
      ${[
        ["8", "Matched homestays"],
        ["₹9.5k", "Estimated 4-day budget"],
        ["6", "Suggested activities"],
        ["92%", "Eco-fit score"]
      ].map(([value, label]) => `<article class="stat"><strong>${value}</strong><span>${label}</span></article>`).join("")}
    </section>
    <section class="section compact">
      <h2>Suggested activity mix</h2>
      <div class="chips">${activities.map((activity) => `<span>${activity}</span>`).join("")}</div>
    </section>
  `);
}

function LoginPage() {
  return layout(`
    <section class="form-shell">
      <div>
        <p class="eyebrow">Login / Signup</p>
        <h1>Plan smarter, travel softer.</h1>
        <p>Create an account to save recommendations, compare homestays, and contact local hosts.</p>
      </div>
      <form class="panel" id="login-form">
        ${Input({ label: "Email", type: "email", placeholder: "traveler@example.com" })}
        ${Input({ label: "Password", type: "password", placeholder: "••••••••" })}
        ${Button({ label: "Continue", variant: "primary", size: "lg" })}
      </form>
    </section>
  `);
}

function AiPlannerPage() {
  return layout(`
    <section class="form-shell">
      <div>
        <p class="eyebrow">AI feature screen</p>
        <h1>Tell Yatra Sathi what kind of journey you want.</h1>
        <p>Enter your budget, interests, duration, and travel style to receive a day-wise eco-tourism itinerary.</p>
      </div>
      <form class="panel" id="planner-form">
        ${Input({ label: "Destination", placeholder: "Uttarakhand, Kumaon, Garhwal..." })}
        ${Input({ label: "Budget", placeholder: "₹10,000" })}
        ${Input({ label: "Trip duration", placeholder: "4 days" })}
        ${Input({ label: "Interests", placeholder: "trekking, food, village walks" })}
        ${Button({ label: "Generate sample itinerary", variant: "primary", size: "lg" })}
      </form>
    </section>
  `);
}

function HomestaysPage() {
  return layout(`
    <section class="page-hero">
      <p class="eyebrow">Detail / List view</p>
      <h1>Browse sustainable homestays.</h1>
      <p>Compare stays by budget, host story, activities, and eco-tourism fit.</p>
    </section>
    <section class="card-grid section">${destinations.map((item) => Card(item)).join("")}</section>
  `);
}

function ShowcasePage() {
  return layout(`
    <section class="page-hero">
      <p class="eyebrow">Component library</p>
      <h1>Week 3 UI showcase.</h1>
      <p>Button, Input, Modal, Toast, and Loader are documented in <code>src/components/ui/</code> and used here.</p>
    </section>
    <section class="panel showcase">
      <div class="button-row">
        ${Button({ label: "Primary", variant: "primary" })}
        ${Button({ label: "Secondary", variant: "secondary" })}
        ${Button({ label: "Outline", variant: "outline" })}
        ${Button({ label: "Disabled", variant: "primary", disabled: true })}
      </div>
      ${Input({ label: "Reusable input", placeholder: "Try any travel preference", error: "Sample validation message" })}
      ${Loader("Loading component preview")}
      ${Button({ label: "Open modal", variant: "primary", attrs: "data-open-modal" })}
      ${Button({ label: "Show toast", variant: "secondary", attrs: "data-show-toast" })}
    </section>
    ${Modal({ title: "Accessible modal", children: "<p>This modal closes with Escape, the close button, or the backdrop.</p>" })}
    ${Toast()}
  `);
}

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/dashboard": DashboardPage,
  "/login": LoginPage,
  "/ai-planner": AiPlannerPage,
  "/homestays": HomestaysPage,
  "/showcase": ShowcasePage
};

function render() {
  setTheme(getTheme());
  const path = window.location.hash.replace("#", "") || "/";
  const page = routes[path] || HomePage;
  app.innerHTML = page();
  bindEvents();
}

function bindEvents() {
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
    render();
  });
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("Demo submitted. Connect backend APIs in a later sprint.");
    });
  });
  document.querySelector("[data-open-modal]")?.addEventListener("click", openModal);
  document.querySelector("[data-show-toast]")?.addEventListener("click", () => showToast("Reusable toast component works."));
  document.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (event.key === "Tab") trapModalFocus(event);
  });
}

function openModal() {
  const modal = document.querySelector(".modal");
  modal?.classList.add("is-open");
  modal?.querySelector("button")?.focus();
}

function closeModal() {
  document.querySelector(".modal")?.classList.remove("is-open");
}

function trapModalFocus(event) {
  const modal = document.querySelector(".modal.is-open");
  if (!modal) return;
  const focusable = modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function showToast(message) {
  const toast = document.querySelector(".toast") || document.createElement("div");
  toast.className = "toast is-visible";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

window.addEventListener("hashchange", render);
render();
