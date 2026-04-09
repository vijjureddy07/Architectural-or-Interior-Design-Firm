/* ============================================================
   AURA ARCH — Dashboard JavaScript
   ============================================================ */

'use strict';

function isAdminDashboard() {
  return /\/dashboard-admin\//.test(window.location.pathname);
}

function isUserDashboard() {
  return /\/dashboard-user\//.test(window.location.pathname);
}

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

function getDashboardThemeIcons() {
  return `
    <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  `;
}

function syncDashboardControlStates() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  document.querySelectorAll('.dashboard-layout .theme-btn').forEach(button => {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });

  document.querySelectorAll('.dashboard-layout .rtl-btn').forEach(button => {
    button.textContent = isRTL ? 'LTR' : 'RTL';
    button.setAttribute('aria-pressed', String(isRTL));
    button.setAttribute('aria-label', isRTL ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout');
  });
}

function initDashboardTopbarControls() {
  document.querySelectorAll('.dashboard-layout .theme-btn').forEach(button => {
    button.type = 'button';
    button.innerHTML = getDashboardThemeIcons();
  });

  const topbarRight = document.querySelector('.dash-topbar__right');
  if (topbarRight) {
    const notificationButtons = Array.from(topbarRight.querySelectorAll('button')).filter(button => {
      const label = button.getAttribute('aria-label') || '';
      return /notification/i.test(label) || button.classList.contains('dash-topbar__notif');
    });

    if (notificationButtons.length > 1) {
      notificationButtons.slice(1).forEach(button => button.remove());
    }
  }

  if (!topbarRight) return;

  const profileImage = topbarRight.querySelector('img');
  if (profileImage) {
    profileImage.classList.add('dash-topbar__avatar');
    if (!profileImage.alt) {
      profileImage.alt = isAdminDashboard() ? 'Admin profile' : 'User profile';
    }
  }
}

function initDashboardSidebarTools() {
  const nav = document.querySelector('.dash-nav');
  if (!nav || nav.querySelector('.dash-nav__mobile-tools')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'dash-nav__mobile-tools';
  wrapper.innerHTML = `
    <p class="dash-nav__section">Preferences</p>
    <div class="dash-nav__mobile-tools-row">
      <button type="button" class="navbar__icon-btn theme-btn dash-nav__tool">${getDashboardThemeIcons()}</button>
      <button type="button" class="navbar__icon-btn rtl-btn dash-nav__tool">${document.documentElement.getAttribute('dir') === 'rtl' ? 'LTR' : 'RTL'}</button>
    </div>
  `;

  const footer = nav.querySelector('.dash-nav__footer');
  if (footer) {
    nav.insertBefore(wrapper, footer);
  } else {
    nav.appendChild(wrapper);
  }
}

function initDashboardRoleCopy() {
  const title = document.querySelector('.dash-page-title');
  const subtitle = document.querySelector('.dash-page-subtitle');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  if (current !== 'index.html' || !title) return;

  if (isAdminDashboard()) {
    title.textContent = 'Admin Dashboard';
    if (subtitle) {
      subtitle.textContent = 'Welcome back. Studio performance, staffing, and client activity at a glance.';
    }
    return;
  }

  if (isUserDashboard()) {
    title.textContent = 'User Dashboard';
    if (subtitle) {
      subtitle.textContent = 'Welcome back, Alexandra. Your project milestones, approvals, and portal updates are ready.';
    }
  }
}

function initDashboardNavCleanup() {
  const nav = document.querySelector('.dash-nav');
  if (!nav) return;

  nav.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const label = link.textContent.replace(/\s+/g, ' ').trim();
    const isUnusedLink = href === '../dashboard-user/index.html'
      || href === '../login.html'
      || /^(Client View|Sign Out|Logout)$/i.test(label);

    if (!isUnusedLink) return;

    const wrapper = link.parentElement;
    if (wrapper && wrapper !== nav && wrapper.children.length === 1) {
      wrapper.remove();
      return;
    }

    link.remove();
  });
}

function initDashboardHomeExit() {
  const nav = document.querySelector('.dash-nav');
  if (!nav) return;

  let footer = nav.querySelector('.dash-nav__footer');
  if (!footer) {
    footer = document.createElement('div');
    footer.className = 'dash-nav__footer';
    nav.appendChild(footer);
  }

  if (footer.querySelector('a[href="../../index.html"]')) return;

  const link = document.createElement('a');
  link.href = '../../index.html';
  link.className = 'dash-nav__link';
  link.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" aria-hidden="true">
      <path d="M3 12h13" />
      <path d="M10 5l-7 7 7 7" />
      <path d="M14 7h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4" />
    </svg>
    Exit to Home
  `;

  footer.appendChild(link);
}

function initDashboardBrandMarks() {
  document.querySelectorAll('.navbar__logo-mark').forEach(mark => {
    mark.textContent = '';
    mark.setAttribute('aria-hidden', 'true');
  });
}

function initMaterialSelections() {
  document.querySelectorAll('.material-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboardBrandMarks();
  initDashboardNavCleanup();
  initDashboardHomeExit();
  initDashboardTopbarControls();
  initDashboardSidebarTools();
  initDashboardSidebar();
  initDashboardNav();
  initDashboardNotifications();
  initDashboardRoleCopy();
  initMaterialSelections();
  syncDashboardControlStates();
});

document.addEventListener('themechange', syncDashboardControlStates);
document.addEventListener('rtlchange', syncDashboardControlStates);
