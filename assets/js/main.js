/* ============================================================
   AURA ARCH — Main JavaScript
   ============================================================ */

'use strict';

document.documentElement.classList.add('js');

const STORAGE_KEYS = {
  theme: ['aa-theme', 'sn-theme'],
  rtl: ['aa-rtl', 'sn-rtl']
};

function readStoredValue(keys) {
  return keys.map(key => localStorage.getItem(key)).find(Boolean);
}

function writeStoredValue(keys, value) {
  keys.forEach(key => localStorage.setItem(key, value));
}

function isDashboardPage() {
  return document.body.classList.contains('dashboard-layout') || /\/dashboard-(admin|user)\//.test(window.location.pathname);
}

function isAuthPage() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  return filename === 'login.html' || filename === 'signup.html';
}

function getScriptBase() {
  const script = document.querySelector('script[src*="assets/js/main.js"]');
  return script ? new URL('.', script.src) : null;
}

function updateThemeColor(theme) {
  let themeColor = document.querySelector('meta[name="theme-color"]');
  if (!themeColor) {
    themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    document.head.appendChild(themeColor);
  }
  themeColor.content = theme === 'dark' ? '#171416' : '#FFFFFF';
}

function initBrandAssets() {
  const base = getScriptBase();
  if (!base) return;

  const faviconHref = new URL('../images/aura-arch-favicon.svg?v=20260328', base).href;
  const iconSelectors = [
    'link[rel="icon"]',
    'link[rel="shortcut icon"]',
    'link[rel="apple-touch-icon"]'
  ];

  iconSelectors.forEach((selector, index) => {
    let link = document.querySelector(selector);
    if (!link) {
      link = document.createElement('link');
      link.rel = index === 2 ? 'apple-touch-icon' : index === 1 ? 'shortcut icon' : 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconHref;
    if (link.rel !== 'apple-touch-icon') link.type = 'image/svg+xml';
    if (link.rel === 'icon') link.sizes = 'any';
  });
}

initBrandAssets();

function getPublicLinkMap() {
  const inPagesDir = /\/pages\//.test(window.location.pathname);
  const home = inPagesDir ? '../index.html' : 'index.html';
  const page = slug => (inPagesDir ? slug : `pages/${slug}`);

  return {
    home,
    home2: page('home2.html'),
    about: page('about.html'),
    services: page('services.html'),
    serviceDetails: page('service-details.html'),
    portfolio: page('portfolio.html'),
    journal: page('journal.html'),
    contact: page('contact.html'),
    pricing: page('pricing.html'),
    cases: page('case-studies.html'),
    faq: page('faq.html'),
    privacy: page('privacy.html'),
    terms: page('terms.html'),
    login: page('login.html'),
    signup: page('signup.html'),
    userDash: page('dashboard-user/index.html'),
    adminDash: page('dashboard-admin/index.html'),
    renderings: page('dashboard-user/renderings.html'),
    materials: page('dashboard-user/materials.html'),
    feedback: page('dashboard-user/feedback.html')
  };
}

function buildPublicNavbar(paths) {
  return `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar__inner">
        <a href="${paths.home}" class="navbar__logo" aria-label="Aura Arch Home">
          <div class="navbar__logo-mark" aria-hidden="true"></div>
          <span class="navbar__logo-text">Aura Arch</span>
        </a>

        <ul class="navbar__nav" role="list">
          <li class="navbar__nav-item">
            <a href="${paths.home}" class="navbar__nav-link" data-nav-group="home">
              Home
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <div class="navbar__dropdown">
              <a href="${paths.home}">Home Page 1</a>
              <a href="${paths.home2}">Home Page 2</a>
            </div>
          </li>
          <li class="navbar__nav-item"><a href="${paths.about}" class="navbar__nav-link">About</a></li>
          <li class="navbar__nav-item"><a href="${paths.services}" class="navbar__nav-link">Services</a></li>
          <li class="navbar__nav-item"><a href="${paths.portfolio}" class="navbar__nav-link">Portfolio</a></li>
          <li class="navbar__nav-item"><a href="${paths.journal}" class="navbar__nav-link">Journal</a></li>
          <li class="navbar__nav-item"><a href="${paths.contact}" class="navbar__nav-link">Contact</a></li>
          <li class="navbar__nav-item">
            <a href="${paths.userDash}" class="navbar__nav-link" data-nav-group="dashboard">
              Dashboard
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <div class="navbar__dropdown">
              <a href="${paths.userDash}">User Dashboard</a>
              <a href="${paths.adminDash}">Admin Dashboard</a>
            </div>
          </li>
        </ul>

        <div class="navbar__actions">
          <button class="navbar__icon-btn theme-btn" type="button" aria-label="Switch to dark mode">
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>
          <button class="navbar__icon-btn rtl-btn" type="button" aria-label="Switch to RTL">RTL</button>
          <a href="${paths.login}" class="btn btn--ghost">Login</a>
          <a href="${paths.signup}" class="btn btn--primary">Sign Up</a>
        </div>

        <button class="navbar__hamburger" type="button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="navbar__mobile" role="dialog" aria-label="Mobile navigation">
      <a href="${paths.home}" class="navbar__mobile-link" data-nav-group="home">Home</a>
      <div class="navbar__mobile-sub">
        <a href="${paths.home}">Home Page 1</a>
        <a href="${paths.home2}">Home Page 2</a>
      </div>
      <a href="${paths.about}" class="navbar__mobile-link">About</a>
      <a href="${paths.services}" class="navbar__mobile-link">Services</a>
      <a href="${paths.portfolio}" class="navbar__mobile-link">Portfolio</a>
      <a href="${paths.journal}" class="navbar__mobile-link">Journal</a>
      <a href="${paths.contact}" class="navbar__mobile-link">Contact</a>
      <a href="${paths.userDash}" class="navbar__mobile-link">User Dashboard</a>
      <a href="${paths.adminDash}" class="navbar__mobile-link">Admin Dashboard</a>
      <div style="margin-top:1.25rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
        <button class="navbar__icon-btn theme-btn" type="button" aria-label="Switch to dark mode">
          <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="5"/></svg>
        </button>
        <button class="navbar__icon-btn rtl-btn" type="button" aria-label="Switch to RTL">RTL</button>
        <a href="${paths.login}" class="btn btn--ghost">Login</a>
        <a href="${paths.signup}" class="btn btn--primary">Sign Up</a>
      </div>
    </div>
  `;
}

function buildPublicFooter(paths) {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <div>
            <div class="navbar__logo" style="margin-bottom:0;">
              <div class="navbar__logo-mark" aria-hidden="true"></div>
              <span class="navbar__logo-text" style="color:var(--clr-white);">Aura Arch</span>
            </div>
            <p class="footer__brand-text">Architecture and interiors composed with quiet monumentality, tactile warmth, and rigorous detail.</p>
            <div class="footer__socials" aria-label="Social media links">
              <a href="#" class="footer__social-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" class="footer__social-btn" aria-label="Pinterest"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 0 0-3.64 19.32c-.05-1.64 0-3.61.4-5.39.22-.95 1.45-6.14 1.45-6.14s-.36-.72-.36-1.79c0-1.68.97-2.94 2.18-2.94 1.03 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.2.6 2.18 1.77 2.18 2.12 0 3.54-2.72 3.54-5.94 0-2.45-1.65-4.28-4.66-4.28-3.39 0-5.5 2.53-5.5 5.36 0 .98.29 1.68.75 2.22.21.25.24.35.16.64-.05.21-.17.72-.22.92-.07.3-.3.41-.56.3-1.57-.64-2.3-2.35-2.3-4.28 0-3.18 2.69-6.99 8.01-6.99 4.28 0 7.1 3.1 7.1 6.42 0 4.4-2.45 7.69-6.05 7.69-1.21 0-2.34-.65-2.73-1.38l-.74 2.92c-.27 1.02-.79 2.29-1.18 3.07A10 10 0 1 0 12 2z"/></svg></a>
              <a href="#" class="footer__social-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            </div>
          </div>
          <div>
            <div class="footer__col-title">Company</div>
            <ul class="footer__links">
              <li><a href="${paths.about}" class="footer__link">About Us</a></li>
              <li><a href="${paths.services}" class="footer__link">Services</a></li>
              <li><a href="${paths.portfolio}" class="footer__link">Portfolio</a></li>
              <li><a href="${paths.cases}" class="footer__link">Case Studies</a></li>
              <li><a href="${paths.journal}" class="footer__link">Journal</a></li>
              <li><a href="${paths.contact}" class="footer__link">Contact</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__col-title">Services</div>
            <ul class="footer__links">
              <li><a href="${paths.serviceDetails}?service=architectural-design" class="footer__link">Architectural Design</a></li>
              <li><a href="${paths.serviceDetails}?service=interior-design" class="footer__link">Interior Design</a></li>
              <li><a href="${paths.serviceDetails}?service=visualization" class="footer__link">3D Visualization</a></li>
              <li><a href="${paths.serviceDetails}?service=lighting-design" class="footer__link">Lighting Design</a></li>
              <li><a href="${paths.serviceDetails}?service=project-delivery" class="footer__link">Project Delivery</a></li>
              <li><a href="${paths.pricing}" class="footer__link">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__col-title">Client Area</div>
            <ul class="footer__links">
              <li><a href="${paths.login}" class="footer__link">Login</a></li>
              <li><a href="${paths.signup}" class="footer__link">Sign Up</a></li>
              <li><a href="${paths.userDash}" class="footer__link">User Dashboard</a></li>
              <li><a href="${paths.adminDash}" class="footer__link">Admin Dashboard</a></li>
              <li><a href="${paths.renderings}" class="footer__link">3D Renderings</a></li>
              <li><a href="${paths.materials}" class="footer__link">Material Selections</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__col-title">Support & Legal</div>
            <ul class="footer__links" style="margin-bottom:1.5rem;">
              <li><a href="${paths.privacy}" class="footer__link">Privacy Policy</a></li>
              <li><a href="${paths.terms}" class="footer__link">Terms & Conditions</a></li>
              <li><a href="${paths.faq}" class="footer__link">FAQ</a></li>
              <li><a href="${paths.contact}" class="footer__link">Support</a></li>
            </ul>
            <div class="footer__col-title">Newsletter</div>
            <form class="footer__newsletter-form">
              <input type="email" class="footer__newsletter-input" placeholder="Your email" required />
              <button type="submit" class="footer__newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__bottom-left">© 2026 Aura Arch. All rights reserved.</p>
          <div class="footer__contact-row">
            <span>hello@auraarch.com</span>
            <span>+1 (212) 000-0000</span>
          </div>
          <div class="footer__bottom-right">
            <a href="${paths.privacy}">Privacy</a>
            <a href="${paths.terms}">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initPublicChrome() {
  if (isDashboardPage() || isAuthPage()) return;

  const paths = getPublicLinkMap();
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('.footer');
  const mobile = document.querySelector('.navbar__mobile');

  if (navbar) {
    navbar.outerHTML = buildPublicNavbar(paths);
    if (mobile) mobile.remove();
  }

  const refreshedFooter = document.querySelector('.footer');
  if (refreshedFooter && refreshedFooter !== footer) {
    refreshedFooter.outerHTML = buildPublicFooter(paths);
  } else if (footer) {
    footer.outerHTML = buildPublicFooter(paths);
  }
}

const ThemeManager = (() => {
  function getPreferred() {
    const stored = readStoredValue(STORAGE_KEYS.theme);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function syncControls(theme) {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      if (!btn.querySelector('svg') && btn.textContent.trim()) {
        btn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
      }
    });

    document.querySelectorAll('.theme-toggle-checkbox').forEach(toggle => {
      toggle.checked = theme === 'dark';
    });
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    writeStoredValue(STORAGE_KEYS.theme, theme);
    updateThemeColor(theme);
    syncControls(theme);
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  function toggle() {
    apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(getPreferred());

    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', toggle);
    });

    document.querySelectorAll('.theme-toggle-checkbox').forEach(toggle => {
      toggle.addEventListener('change', () => apply(toggle.checked ? 'dark' : 'light'));
    });

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', event => {
      const stored = readStoredValue(STORAGE_KEYS.theme);
      if (!stored) apply(event.matches ? 'dark' : 'light');
    });
  }

  return { init, toggle, apply };
})();

const RTLManager = (() => {
  function syncControls(isRTL) {
    document.querySelectorAll('.rtl-btn').forEach(btn => {
      btn.textContent = isRTL ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', isRTL ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout');
      btn.setAttribute('aria-pressed', String(isRTL));
    });

    document.querySelectorAll('.rtl-toggle-checkbox').forEach(toggle => {
      toggle.checked = isRTL;
    });
  }

  function apply(isRTL) {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', isRTL ? 'ar' : 'en');
    writeStoredValue(STORAGE_KEYS.rtl, String(isRTL));
    syncControls(isRTL);
  }

  function toggle() {
    apply(document.documentElement.getAttribute('dir') !== 'rtl');
  }

  function init() {
    apply(readStoredValue(STORAGE_KEYS.rtl) === 'true');

    document.querySelectorAll('.rtl-btn').forEach(btn => {
      btn.addEventListener('click', toggle);
    });

    document.querySelectorAll('.rtl-toggle-checkbox').forEach(toggle => {
      toggle.addEventListener('change', () => apply(toggle.checked));
    });
  }

  return { init, toggle, apply };
})();

const Navbar = (() => {
  function init() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.navbar__hamburger');
    const mobileMenu = document.querySelector('.navbar__mobile');

    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    }

    document.addEventListener('click', event => {
      if (!mobileMenu || !hamburger || !mobileMenu.classList.contains('active')) return;
      if (navbar.contains(event.target)) return;
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });

    document.querySelectorAll('.navbar__mobile-link, .navbar__mobile-sub a').forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenu || !hamburger) return;
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  return { init };
})();

const ScrollReveal = (() => {
  let observer = null;

  function init(root = document) {
    const elements = Array.from(root.querySelectorAll('.reveal')).filter(el => !el.dataset.revealBound);
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(el => {
        el.dataset.revealBound = 'true';
        el.classList.add('visible');
      });
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
    }

    elements.forEach(el => {
      el.dataset.revealBound = 'true';
      observer.observe(el);
    });
  }

  return { init };
})();

const ParallaxMedia = (() => {
  let items = [];
  let ticking = false;
  let bound = false;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function update() {
    ticking = false;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const speed = parseFloat(item.dataset.parallax || '0.12');
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translate = clamp((progress - 0.5) * 60 * speed * 10, -24, 24);
      item.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0) scale(1.04)`;
    });
  }

  function requestTick() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  function init(root = document) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.querySelectorAll('[data-parallax]').forEach(item => {
      item.dataset.parallaxBound = 'true';
    });

    items = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!items.length) return;

    if (!bound) {
      window.addEventListener('scroll', requestTick, { passive: true });
      window.addEventListener('resize', requestTick);
      bound = true;
    }

    requestTick();
  }

  return { init };
})();

const HeroLoad = (() => {
  function init() {
    const body = document.body;
    if (!body || body.classList.contains('page-ready')) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      body.classList.add('page-ready');
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        body.classList.add('page-ready');
      });
    });
  }

  return { init };
})();

const MouseTilt = (() => {
  function init(root = document) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    root.querySelectorAll('[data-tilt]').forEach(el => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = 'true';

      const intensity = parseFloat(el.dataset.tiltStrength || '10');

      el.addEventListener('pointermove', event => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * intensity;
        const rotateX = (0.5 - y) * intensity * 0.9;

        el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 0)`;
      });

      el.addEventListener('pointerleave', () => {
        el.style.transform = '';
      });
    });
  }

  return { init };
})();

const Tabs = (() => {
  function init() {
    document.querySelectorAll('.tabs__nav').forEach(nav => {
      nav.querySelectorAll('.tabs__btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          const wrapper = btn.closest('.tabs-wrapper') || document;

          nav.querySelectorAll('.tabs__btn').forEach(item => item.classList.remove('active'));
          btn.classList.add('active');

          wrapper.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === target);
          });
        });
      });
    });
  }

  return { init };
})();

const Accordion = (() => {
  function init() {
    document.querySelectorAll('.accordion-btn, .accordion__trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');
        btn.classList.toggle('active', !isActive);
        content.classList.toggle('active', !isActive);
      });
    });
  }

  return { init };
})();

const FormValidation = (() => {
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(input) {
    const value = input.value.trim();
    const error = input.closest('.form-group')?.querySelector('.form-error');
    let isValid = true;
    let message = '';

    if (input.required && !value) {
      isValid = false;
      message = 'This field is required.';
    } else if (input.type === 'email' && value && !validateEmail(value)) {
      isValid = false;
      message = 'Please enter a valid email address.';
    } else if (input.minLength && value.length < input.minLength) {
      isValid = false;
      message = `Minimum ${input.minLength} characters required.`;
    }

    input.classList.toggle('error', !isValid);
    if (error) {
      error.textContent = message;
      error.classList.toggle('visible', !isValid);
    }

    return isValid;
  }

  function initForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      let allValid = true;

      inputs.forEach(input => {
        if (!validateField(input)) allValid = false;
      });

      if (!allValid) return;

      const submit = form.querySelector('[type="submit"]');
      if (!submit) return;

      const original = submit.textContent;
      submit.textContent = 'Sending...';
      submit.disabled = true;

      window.setTimeout(() => {
        submit.textContent = 'Sent!';
        form.reset();
        window.setTimeout(() => {
          submit.textContent = original;
          submit.disabled = false;
        }, 2000);
      }, 900);
    });
  }

  function init() {
    document.querySelectorAll('form[data-validate]').forEach(initForm);
  }

  return { init, validateField };
})();

const PortfolioFilter = (() => {
  function init() {
    const filterWrapper = document.querySelector('.portfolio-filter');
    if (!filterWrapper) return;

    filterWrapper.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterWrapper.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.portfolio-filterable').forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.opacity = show ? '1' : '0.28';
          item.style.pointerEvents = show ? 'auto' : 'none';
        });
      });
    });
  }

  return { init };
})();

const CounterAnimation = (() => {
  function animateCounter(el, target, duration = 2000) {
    const start = performance.now();

    function update(time) {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function init() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(el => animateCounter(el, parseInt(el.dataset.counter, 10)));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target, parseInt(entry.target.dataset.counter, 10));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    counters.forEach(el => observer.observe(el));
  }

  return { init };
})();

const Lightbox = (() => {
  let current = 0;
  let images = [];
  let overlay;

  function create() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__content">
        <button class="lightbox__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <button class="lightbox__prev" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <img class="lightbox__img" src="" alt="" />
        <button class="lightbox__next" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        <div class="lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.lightbox__close').addEventListener('click', close);
    overlay.querySelector('.lightbox__backdrop').addEventListener('click', close);
    overlay.querySelector('.lightbox__prev').addEventListener('click', prev);
    overlay.querySelector('.lightbox__next').addEventListener('click', next);

    document.addEventListener('keydown', event => {
      if (!overlay.classList.contains('active')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    });

    const style = document.createElement('style');
    style.textContent = `
      .lightbox { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; }
      .lightbox.active { display: flex; }
      .lightbox__backdrop { position: absolute; inset: 0; background: rgba(10,10,10,0.95); }
      .lightbox__content { position: relative; z-index: 1; display: flex; align-items: center; gap: 1rem; max-width: 90vw; }
      .lightbox__img { max-height: 85vh; max-width: 80vw; object-fit: contain; border-radius: 4px; }
      .lightbox__close, .lightbox__prev, .lightbox__next { width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: all 0.2s; flex-shrink: 0; }
      .lightbox__close { position: absolute; top: -60px; right: 0; }
      .lightbox__close:hover, .lightbox__prev:hover, .lightbox__next:hover { background: rgba(var(--clr-gold-rgb), 0.24); border-color: var(--clr-gold); }
      .lightbox__close svg, .lightbox__prev svg, .lightbox__next svg { width: 18px; height: 18px; }
      .lightbox__caption { position: absolute; bottom: -40px; left: 0; right: 0; text-align: center; color: rgba(255,255,255,0.6); font-size: 0.8rem; }
    `;
    document.head.appendChild(style);
  }

  function show() {
    const img = overlay.querySelector('.lightbox__img');
    const caption = overlay.querySelector('.lightbox__caption');
    img.src = images[current].src;
    img.alt = images[current].alt || '';
    caption.textContent = images[current].alt || `${current + 1} / ${images.length}`;
  }

  function open(index) {
    current = index;
    show();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    show();
  }

  function next() {
    current = (current + 1) % images.length;
    show();
  }

  function init() {
    const items = document.querySelectorAll('[data-lightbox]');
    if (!items.length) return;

    create();
    images = [];

    items.forEach((el, index) => {
      const src = el.dataset.lightbox || el.querySelector('img')?.src;
      const alt = el.dataset.lightboxCaption || el.querySelector('img')?.alt || '';
      images.push({ src, alt });
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => open(index));
    });
  }

  return { init };
})();

const Newsletter = (() => {
  function init() {
    document.querySelectorAll('.newsletter-form, .footer__newsletter-form').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const input = form.querySelector('input');
        const button = form.querySelector('button');

        if (!input || !input.value.trim() || !button) return;

        const original = button.textContent;
        button.textContent = 'Done!';
        button.disabled = true;
        input.value = '';

        window.setTimeout(() => {
          button.textContent = original;
          button.disabled = false;
        }, 2200);
      });
    });
  }

  return { init };
})();

function initPasswordToggles() {
  document.querySelectorAll('.password-toggle').forEach(button => {
    if (!button.dataset.passwordBound) {
      button.dataset.passwordBound = 'true';
      button.addEventListener('click', () => {
        const targetSelector = button.getAttribute('data-target');
        const input = targetSelector ? document.querySelector(targetSelector) : button.closest('.password-wrap')?.querySelector('input');
        if (!input) return;
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        button.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
      });
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function normalizePath(pathname) {
  return pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
}

function initActiveNav() {
  const currentPath = normalizePath(window.location.pathname);
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar__nav-link, .navbar__dropdown a, .navbar__mobile-link, .navbar__mobile-sub a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const targetPath = normalizePath(new URL(href, window.location.href).pathname);
    const isHomeGroup = link.dataset.navGroup === 'home' && (currentFile === 'index.html' || currentFile === 'home2.html' || currentPath === '/');
    const isServicesGroup = currentFile === 'service-details.html' && targetPath.endsWith('/services');
    const isJournalGroup = currentFile === 'journal-post.html' && targetPath.endsWith('/journal');
    const isMatch = targetPath === currentPath || isHomeGroup || isServicesGroup || isJournalGroup;
    link.classList.toggle('is-active', isMatch);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPublicChrome();
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  HeroLoad.init();
  ScrollReveal.init();
  ParallaxMedia.init();
  MouseTilt.init();
  Tabs.init();
  Accordion.init();
  FormValidation.init();
  PortfolioFilter.init();
  CounterAnimation.init();
  Lightbox.init();
  Newsletter.init();
  initPasswordToggles();
  initSmoothScroll();
  initActiveNav();
});
