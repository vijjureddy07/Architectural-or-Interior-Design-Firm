# Aura Arch

Editorial architecture and interior design website with public pages, authentication flows, and admin/user dashboards. Built with semantic HTML, shared CSS tokens, and modular ES6 JavaScript.

## Structure

```text
Architectural-or-Interior-Design-Firm/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dark-mode.css
│   │   ├── rtl.css
│   │   └── dashboard.css
│   ├── images/
│   └── js/
│       ├── main.js
│       ├── service-details.js
│       ├── dashboard.js
├── documentation/
├── pages/
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Getting Started

Open `index.html` directly in a modern browser, or serve the project locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Theme System

- Primary brand color: `#E25D47`
- Secondary brand color: `#171416`
- Light mode uses white-first surfaces with restrained accent use
- Dark mode uses charcoal and near-black surfaces
- Theme state is stored in `localStorage`
- RTL state is stored in `localStorage`

## Key Pages

- `index.html`: Home 1
- `pages/home2.html`: Home 2
- `pages/about.html`, `pages/services.html`, `pages/service-details.html`, `pages/portfolio.html`
- `pages/journal.html`, `pages/journal-post.html`
- `pages/contact.html`, `pages/pricing.html`, `pages/faq.html`
- `pages/login.html`, `pages/signup.html`
- `pages/dashboard-admin/*.html`
- `pages/dashboard-user/*.html`

## Integrations

- Contact form is Formspree-ready in `pages/contact.html`
- Newsletter form markup is ready for Mailchimp or ConvertKit
- Payment and booking flows are placeholder-ready in pricing/contact flows
- Charts use Chart.js on admin dashboard pages

## SEO

- Every HTML page includes viewport, favicon, dark-mode, and RTL support
- Every HTML page includes a meta description
- Root includes `robots.txt` and `sitemap.xml`
- Home page includes JSON-LD business data

## Customization

- Update colors in `assets/css/style.css`
- Update dark theme overrides in `assets/css/dark-mode.css`
- Update shared public chrome in `assets/js/main.js`
- Update service content in `assets/js/service-details.js`
- Update dashboard shell behavior in `assets/js/dashboard.js`
- Replace images in `assets/images/`

## Credits

- Google Fonts: Cormorant Garamond, DM Sans
- Chart.js
- Unsplash demo photography
- Formspree placeholder integration
