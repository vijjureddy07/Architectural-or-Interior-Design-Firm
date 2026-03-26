/* ============================================================
   STUDIO NOIR — Main JavaScript
   ES6+ Modular structure
   ============================================================ */

'use strict';

// ── Theme Manager ──
const ThemeManager = (() => {
  const THEME_KEY = 'sn-theme';

  function getPreferred() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-btn');
    if (btn) btn.classList.toggle('dark-active', theme === 'dark');
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    apply(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(getPreferred());
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(THEME_KEY)) apply(e.matches ? 'dark' : 'light');
    });
  }

  return { init, toggle, apply };
})();

// ── RTL Manager ──
const RTLManager = (() => {
  const RTL_KEY = 'sn-rtl';

  function apply(rtl) {
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', rtl ? 'ar' : 'en');
    localStorage.setItem(RTL_KEY, rtl);
    document.querySelectorAll('.rtl-btn').forEach(btn => {
      btn.textContent = rtl ? 'LTR' : 'RTL';
    });
  }

  function toggle() {
    const current = document.documentElement.getAttribute('dir');
    apply(current !== 'rtl');
  }

  function init() {
    const stored = localStorage.getItem(RTL_KEY) === 'true';
    apply(stored);
    document.querySelectorAll('.rtl-btn').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  return { init, toggle };
})();

// ── Navbar ──
const Navbar = (() => {
  function init() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.navbar__hamburger');
    const mobileMenu = document.querySelector('.navbar__mobile');

    if (!navbar) return;

    // Scroll effect
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hamburger
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });
    }

    // Close mobile menu on outside click
    document.addEventListener('click', e => {
      if (mobileMenu && mobileMenu.classList.contains('active') &&
          !navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.navbar__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  return { init };
})();

// ── Scroll Reveal ──
const ScrollReveal = (() => {
  function init() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  return { init };
})();

// ── Tabs ──
const Tabs = (() => {
  function init() {
    document.querySelectorAll('.tabs__nav').forEach(nav => {
      nav.querySelectorAll('.tabs__btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          const wrapper = btn.closest('.tabs-wrapper') || document;

          nav.querySelectorAll('.tabs__btn').forEach(b => b.classList.remove('active'));
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

// ── Accordion ──
const Accordion = (() => {
  function init() {
    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');

        // Close all (optional: for exclusive accordion)
        // document.querySelectorAll('.accordion-btn.active').forEach(b => {
        //   b.classList.remove('active');
        //   b.nextElementSibling.classList.remove('active');
        // });

        btn.classList.toggle('active', !isActive);
        content.classList.toggle('active', !isActive);
      });
    });
  }

  return { init };
})();

// ── Form Validation ──
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

    form.addEventListener('submit', e => {
      e.preventDefault();
      let allValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) allValid = false;
      });

      if (allValid) {
        const btn = form.querySelector('[type="submit"]');
        if (btn) {
          const origText = btn.textContent;
          btn.textContent = 'Sending...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = 'Sent!';
            form.reset();
            setTimeout(() => {
              btn.textContent = origText;
              btn.disabled = false;
            }, 3000);
          }, 1500);
        }
      }
    });
  }

  function init() {
    document.querySelectorAll('form[data-validate]').forEach(initForm);
  }

  return { init, validateField };
})();

// ── Portfolio Filter ──
const PortfolioFilter = (() => {
  function init() {
    const filterWrapper = document.querySelector('.portfolio-filter');
    if (!filterWrapper) return;

    filterWrapper.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterWrapper.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.portfolio-filterable').forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.opacity = show ? '1' : '0.3';
          item.style.pointerEvents = show ? 'auto' : 'none';
        });
      });
    });
  }

  return { init };
})();

// ── Counter Animation ──
const CounterAnimation = (() => {
  function animateCounter(el, target, duration = 2000) {
    const start = performance.now();
    const startVal = 0;

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + eased * (target - startVal));
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function init() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.counter);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  return { init };
})();

// ── Lightbox ──
const Lightbox = (() => {
  let current = 0;
  let images = [];
  let overlay;

  function create() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__content">
        <button class="lightbox__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <button class="lightbox__prev" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <img class="lightbox__img" src="" alt="" />
        <button class="lightbox__next" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <div class="lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.lightbox__close').addEventListener('click', close);
    overlay.querySelector('.lightbox__backdrop').addEventListener('click', close);
    overlay.querySelector('.lightbox__prev').addEventListener('click', prev);
    overlay.querySelector('.lightbox__next').addEventListener('click', next);

    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      .lightbox { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; }
      .lightbox.active { display: flex; }
      .lightbox__backdrop { position: absolute; inset: 0; background: rgba(10,10,10,0.95); }
      .lightbox__content { position: relative; z-index: 1; display: flex; align-items: center; gap: 1rem; max-width: 90vw; }
      .lightbox__img { max-height: 85vh; max-width: 80vw; object-fit: contain; border-radius: 4px; }
      .lightbox__close, .lightbox__prev, .lightbox__next { width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: all 0.2s; flex-shrink: 0; }
      .lightbox__close { position: absolute; top: -60px; right: 0; }
      .lightbox__close:hover, .lightbox__prev:hover, .lightbox__next:hover { background: rgba(201,168,76,0.3); border-color: #C9A84C; }
      .lightbox__close svg, .lightbox__prev svg, .lightbox__next svg { width: 18px; height: 18px; }
      .lightbox__caption { position: absolute; bottom: -40px; left: 0; right: 0; text-align: center; color: rgba(255,255,255,0.6); font-size: 0.8rem; }
    `;
    document.head.appendChild(style);
  }

  function open(idx) {
    current = idx;
    show();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function show() {
    const img = overlay.querySelector('.lightbox__img');
    const cap = overlay.querySelector('.lightbox__caption');
    img.src = images[current].src;
    img.alt = images[current].alt || '';
    if (cap) cap.textContent = images[current].alt || `${current + 1} / ${images.length}`;
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
    create();
    document.querySelectorAll('[data-lightbox]').forEach((el, idx) => {
      const src = el.dataset.lightbox || el.querySelector('img')?.src;
      const alt = el.dataset.lightboxCaption || el.querySelector('img')?.alt || '';
      images.push({ src, alt });
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => open(idx));
    });
  }

  return { init, open, close };
})();

// ── Newsletter Form ──
const Newsletter = (() => {
  function init() {
    document.querySelectorAll('.newsletter-form, .footer__newsletter-form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input');
        const btn = form.querySelector('button');
        if (input && input.value.trim()) {
          if (btn) {
            const orig = btn.textContent;
            btn.textContent = 'Done!';
            btn.disabled = true;
            input.value = '';
            setTimeout(() => {
              btn.textContent = orig;
              btn.disabled = false;
            }, 3000);
          }
        }
      });
    });
  }

  return { init };
})();

// ── Smooth Scroll ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Active Nav Link ──
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav-link, .navbar__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(current) && current !== '') {
      link.style.color = 'var(--clr-gold)';
    }
  });
}

// ── Init All ──
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  ScrollReveal.init();
  Tabs.init();
  Accordion.init();
  FormValidation.init();
  PortfolioFilter.init();
  CounterAnimation.init();
  Lightbox.init();
  Newsletter.init();
  initSmoothScroll();
  initActiveNav();
});
