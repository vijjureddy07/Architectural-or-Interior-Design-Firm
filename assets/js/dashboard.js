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

function initDashboardTopbarControls() {
  const topbarRight = document.querySelector('.dash-topbar__right');
  if (!topbarRight) return;

  const themeBtn = topbarRight.querySelector('.theme-btn');
  if (!themeBtn) return;

  themeBtn.setAttribute('aria-label', 'Switch to dark mode');

  if (!topbarRight.querySelector('.dash-topbar__notif')) {
    const notifBtn = document.createElement('button');
    notifBtn.type = 'button';
    notifBtn.className = 'navbar__icon-btn dash-topbar__notif';
    notifBtn.setAttribute('aria-label', 'Open notifications');
    notifBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
        <path d="M9 17a3 3 0 0 0 6 0" />
      </svg>
      <span class="dash-notif-dot" aria-hidden="true"></span>
    `;
    topbarRight.insertBefore(notifBtn, themeBtn);
  }

  if (!topbarRight.querySelector('.rtl-btn')) {
    const rtlBtn = document.createElement('button');
    rtlBtn.type = 'button';
    rtlBtn.className = 'navbar__icon-btn rtl-btn';
    rtlBtn.setAttribute('aria-label', 'Switch to RTL');
    rtlBtn.textContent = document.documentElement.getAttribute('dir') === 'rtl' ? 'LTR' : 'RTL';
    topbarRight.insertBefore(rtlBtn, themeBtn.nextSibling);
  }

  const profileImage = topbarRight.querySelector('img');
  if (profileImage) {
    profileImage.classList.add('dash-topbar__avatar');
    if (!profileImage.alt) {
      profileImage.alt = isAdminDashboard() ? 'Admin profile' : 'User profile';
    }
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

function initDashboardLogout() {
  const nav = document.querySelector('.dash-nav');
  if (!nav || nav.querySelector('.dash-nav__link--logout')) return;

  const footer = document.createElement('div');
  footer.className = 'dash-nav__footer';
  footer.innerHTML = `
    <a href="../login.html" class="dash-nav__link dash-nav__link--logout">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" aria-hidden="true">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      Logout
    </a>
  `;
  nav.appendChild(footer);
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
  initDashboardTopbarControls();
  initDashboardSidebar();
  initDashboardNav();
  initDashboardNotifications();
  initDashboardRoleCopy();
  initDashboardLogout();
  initMaterialSelections();
});
