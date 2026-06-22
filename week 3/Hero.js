export function Hero() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">AI-powered eco-tourism planner</p>
        <h1>Find homestays, local stories, and greener journeys.</h1>
        <p>Yatra Sathi recommends responsible stays, activities, and itineraries based on your budget, interests, and trip duration.</p>
        <div class="hero-actions">
          <a class="btn primary lg" href="#/ai-planner">Plan my trip</a>
          <a class="btn outline lg" href="#/homestays">Explore homestays</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Sample itinerary card">
        <span>Sample AI itinerary</span>
        <h2>4 days in Kumaon</h2>
        <ul>
          <li>Day 1: Village homestay check-in</li>
          <li>Day 2: Forest walk and local food trail</li>
          <li>Day 3: Trekking and cultural workshop</li>
          <li>Day 4: Sunrise viewpoint and host breakfast</li>
        </ul>
      </div>
    </section>
  `;
}
