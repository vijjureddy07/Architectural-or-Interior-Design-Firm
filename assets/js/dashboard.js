/* ============================================================
   AURA ARCH — Dashboard JavaScript
   ============================================================ */

'use strict';

function initDashboardSidebar() {
  const sidebar = document.querySelector('.dash-sidebar, .sidebar');
  const hamburger = document.querySelector('#dashHamburger, .dash-hamburger, .dash-topbar__hamburger');

  if (!sidebar || !hamburger) return;

  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'background:rgba(10,10,10,0.48)',
      'z-index:190',
      'display:none',
      'opacity:0',
      'transition:opacity 0.2s ease'
    ].join(';');
    document.body.appendChild(overlay);
  }

  const open = () => {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    sidebar.classList.remove('open');
    overlay.style.opacity = '0';
    window.setTimeout(() => {
      if (!sidebar.classList.contains('open')) {
        overlay.style.display = 'none';
      }
    }, 200);
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    if (window.innerWidth > 1024) return;
    if (sidebar.classList.contains('open')) close();
    else open();
  });

  overlay.addEventListener('click', close);

  document.querySelectorAll('.dash-nav__link, .sidebar__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) close();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      close();
    }
  });
}

function initDashboardNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.dash-nav__link, .sidebar__nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.split('/').pop();
    if (target === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initDashboardNotifications() {
  document.querySelectorAll('.dash-topbar__icon-btn, .dash-topbar__notif').forEach(button => {
    const label = button.getAttribute('aria-label') || '';
    if (!/notification/i.test(label)) return;

    button.addEventListener('click', () => {
      button.querySelector('.dash-notif-dot, span, .notif-dot')?.remove();
    });
  });
}

function initDashboardTopbarControls() {
  const topbarRight = document.querySelector('.dash-topbar__right');
  if (!topbarRight || topbarRight.querySelector('.rtl-btn')) return;

  const themeBtn = topbarRight.querySelector('.theme-btn');
  if (!themeBtn) return;

  const rtlBtn = document.createElement('button');
  rtlBtn.type = 'button';
  rtlBtn.className = 'navbar__icon-btn rtl-btn';
  rtlBtn.setAttribute('aria-label', 'Switch to RTL');
  rtlBtn.textContent = document.documentElement.getAttribute('dir') === 'rtl' ? 'LTR' : 'RTL';
  topbarRight.insertBefore(rtlBtn, themeBtn.nextSibling);
}

function initMaterialSelections() {
  document.querySelectorAll('.material-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboardTopbarControls();
  initDashboardSidebar();
  initDashboardNav();
  initDashboardNotifications();
  initMaterialSelections();
});
