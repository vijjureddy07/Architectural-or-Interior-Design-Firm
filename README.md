# Studio Noir — Architectural & Interior Design Firm Website

A complete, production-ready frontend for an architectural and interior design firm. Built with vanilla HTML5, CSS3, and JavaScript — no frameworks, no build step.

---

## 📁 Project Structure

```
studio-noir/
├── index.html                    # Home Page 1 (dark hero)
├── assets/
│   ├── css/
│   │   ├── style.css             # Core design system + all components
│   │   ├── dark-mode.css         # Dark mode overrides
│   │   ├── rtl.css               # RTL language support
│   │   └── dashboard.css         # Dashboard-specific styles
│   └── js/
│       ├── main.js               # Navbar, scroll, animations, counters
│       └── dashboard.js          # Sidebar toggle, dashboard interactions
└── pages/
    ├── home2.html                # Home Page 2 (split hero)
    ├── about.html
    ├── services.html
    ├── portfolio.html            # Filterable grid with lightbox
    ├── blog.html
    ├── blog-post.html
    ├── case-studies.html
    ├── pricing.html
    ├── contact.html
    ├── login.html
    ├── faq.html
    ├── privacy.html
    ├── terms.html
    ├── dashboard-user/
    │   ├── index.html            # Project overview
    │   ├── renderings.html
    │   ├── materials.html
    │   ├── feedback.html
    │   ├── documents.html
    │   ├── messages.html
    │   ├── profile.html
    │   └── settings.html
    └── dashboard-admin/
        ├── index.html            # KPI overview + charts
        ├── projects.html         # Filterable project table
        ├── clients.html          # Client card grid
        ├── team.html             # Team member cards
        ├── analytics.html        # Charts (Chart.js)
        ├── messages.html         # Split inbox UI
        └── settings.html
```

---

## 🚀 Getting Started

### Option A — Open Directly in Browser
Just open `index.html` in any modern browser. No build step, no server required.

### Option B — Serve Locally (Recommended)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code
Install "Live Server" extension, right-click index.html → Open with Live Server
```

### Option C — Deploy to GitHub Pages
```bash
git clone https://github.com/yourusername/studio-noir.git
cd studio-noir
git push origin main
# Enable Pages in repo Settings → Pages → Deploy from main branch
```

---

## 🎨 Design System

### Brand Colors
| Token | Value | Use |
|---|---|---|
| `--clr-black` | `#0A0A0A` | Primary surfaces, buttons |
| `--clr-white` | `#F7F5F0` | Background, text on dark |
| `--clr-gold` | `#C9A84C` | Accent, CTAs, highlights |

### Typography
- **Display:** Cormorant Garamond (Google Fonts) — headings, hero text
- **Body:** DM Sans (Google Fonts) — paragraphs, UI text

### Components Available in `style.css`
- `.btn`, `.btn--primary`, `.btn--outline`, `.btn--ghost`, `.btn--ghost-light`
- `.navbar`, `.navbar__dropdown`, `.navbar__mobile`
- `.footer`, `.footer__grid`, `.footer__newsletter-form`
- `.form-group`, `.form-input`, `.form-label`
- `.section-label` (gold uppercase eyebrow text)
- `.container` (max-width: 1280px, centered)
- `.reveal` (scroll-activated fade-in animation)

---

## 🌙 Dark Mode

Toggle via the moon icon in the navbar. The theme is stored in `localStorage` and applied via `data-theme="dark"` on the `<html>` element.

To add dark mode support to new elements, use CSS variables — they swap automatically:

```css
.my-element {
  background: var(--clr-surface);    /* adapts */
  color: var(--clr-text);            /* adapts */
  border: 1px solid var(--clr-border);
}
```

---

## 🔄 RTL Support

Click the **RTL** button in the navbar to switch to right-to-left layout. Applied via `dir="rtl"` on `<html>`. Logical CSS properties (`margin-inline-start`, `padding-inline-end`) handle most cases automatically.

---

## 📊 Charts

The admin analytics dashboard uses **Chart.js 4.4** loaded from cdnjs. Charts are defined inline in `analytics.html` and `dashboard-admin/index.html`. To swap data:

```javascript
new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: { labels: [...], datasets: [{ data: [...] }] },
  options: { ... }
});
```

---

## 📬 Contact Form

The contact form at `pages/contact.html` uses [Formspree](https://formspree.io). To activate:

1. Create a free Formspree account
2. Create a new form and get your form ID
3. Update the `action` attribute:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🔐 Authentication

The login page at `pages/login.html` is a frontend UI only. To add real auth:

- **Option A:** Integrate with [Supabase Auth](https://supabase.com/docs/guides/auth) (free tier available)
- **Option B:** Use [Auth0](https://auth0.com) with a free plan
- **Option C:** Firebase Authentication

---

## 🌐 Google Fonts

Fonts load from Google Fonts via `@import` in `style.css`. For self-hosting:

1. Download fonts from [Google Fonts](https://fonts.google.com)
2. Place in `/assets/fonts/`
3. Update the `@font-face` declarations in `style.css`

---

## 📐 Customisation

### Change Brand Colors
Edit the `:root` block in `style.css`:
```css
:root {
  --clr-gold: #C9A84C;   /* Change to your brand color */
  --clr-black: #0A0A0A;
}
```

### Add a New Page
1. Copy the closest existing page as a template
2. Update the `<title>` and `<meta name="description">`
3. Add a link in the navbar dropdown

---

## 📦 External Dependencies

All loaded from CDNs (no npm install required):

| Library | Version | Pages |
|---|---|---|
| Chart.js | 4.4.0 | Admin Analytics, Admin Overview |
| Google Fonts | — | All pages |

---

## ✅ Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS Safari 14+, Android Chrome 90+

---

## 📄 License

MIT — free to use, modify, and distribute.

---

Built with care for [Studio Noir](https://github.com/vijjureddy07/Architectural-or-Interior-Design-Firm) · 2026
