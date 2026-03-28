# Aura Arch Documentation

## Installation Guide

1. Clone or download the project.
2. Open `index.html` directly, or run `python3 -m http.server 8000`.
3. Visit the local server in a browser.

## Customization Guide

- Colors: `assets/css/style.css`
- Dark mode overrides: `assets/css/dark-mode.css`
- RTL rules: `assets/css/rtl.css`
- Shared public navigation/footer: `assets/js/main.js`
- Service detail content and skeleton rendering: `assets/js/service-details.js`
- Dashboard interactions: `assets/js/dashboard.js`
- Brand assets: `assets/images/aura-arch-mark.svg`, `assets/images/aura-arch-favicon.svg`

## Page Structure

- Public marketing pages live in `/` and `/pages`
- Service detail route: `pages/service-details.html`
- Authentication pages: `pages/login.html`, `pages/signup.html`
- Admin dashboard pages: `pages/dashboard-admin/`
- User dashboard pages: `pages/dashboard-user/`

## Credits

- Fonts: Google Fonts
- Charts: Chart.js
- Demo imagery: Unsplash

## Changelog

- Rebranded project to Aura Arch
- Replaced logo and favicon with AA monogram
- Unified shared navbar/footer
- Updated theme system for light mode, dark mode, and RTL
- Added data-driven service details page with loading skeleton
- Added root `robots.txt` and `sitemap.xml`

## Support

For template customization, update content, links, and assets directly in the shared HTML, CSS, and JS files.
