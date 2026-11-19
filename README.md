# HappySmile Lead Callback Mockup

A zero-dependency, static, clickable web mockup demonstrating an AI voice assistant callback workflow for dental clinic leads, paired with a real-time clinic lead desk.

Built for a product case exercise based on a fictional chain of 12 dental clinics in India.

## Key Screens

1. **Screen 1 · The moment they ask (`#/patient`)**: Mobile-first patient confirmation screen featuring an animated success tick, clinic & treatment badge, immediate AI call trigger ("Call me now"), call later scheduler, and person-handoff alternatives. Includes an animated calling & line-by-line transcript interface.
2. **Screen 2 · What HappySmile sees (`#/team`)**: Desktop clinic lead desk with clinic filtering, an experiment progress strip tracking randomized pilot metrics (highlighting attended consultations per 100 enquiries), ARIA tabs, lead cards with audio preview simulation, front-desk takeover, slot booking, handoff rules modal, and detailed call logs drawer.

## Running Locally

Serve statically with any web server (no build step or dependencies required):

```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve .
```

Then open `http://localhost:8000/#/patient` in your browser.

## Tech Stack

- Semantic HTML5 with ARIA accessibility roles
- Vanilla CSS3 with mobile-first and desktop-responsive media queries
- Vanilla ES6 JavaScript with hash-based routing and in-memory / sessionStorage persistence
- System-font fallback with Google Fonts Plus Jakarta Sans
- Inline SVGs (no external icon dependencies)
