/* ============================================================
   STUDIO NOIR — Dashboard JavaScript
   ============================================================ */

'use strict';

// ── Sidebar Toggle ──
const DashSidebar = (() => {
  function init() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.dash-topbar__hamburger');
    const closeBtn = document.querySelector('.sidebar__close');
    const overlay = document.querySelector('.sidebar-overlay');

    if (!sidebar) return;

    function open() {
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
  }

  return { init };
})();

// ── Active Nav Link ──
function initDashNav() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar__nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(current)) {
      link.classList.add('active');
    }
  });
}

// ── Notification Dropdown ──
const Notifications = (() => {
  function init() {
    const btn = document.querySelector('.dash-topbar__notif');
    if (!btn) return;

    btn.addEventListener('click', () => {
      // Simple toggle indicator
      const dot = btn.querySelector('.dash-notif-dot');
      if (dot) dot.style.display = 'none';
    });
  }

  return { init };
})();

// ── Material Selection ──
const MaterialSelector = (() => {
  function init() {
    document.querySelectorAll('.material-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('selected');
      });
    });
  }

  return { init };
})();

// ── Simple Chart (Canvas) ──
const DashChart = (() => {
  function drawBarChart(canvasId, data, labels) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const padding = 40;
    const max = Math.max(...data) * 1.2;
    const barW = (W - padding * 2) / data.length * 0.6;
    const gap = (W - padding * 2) / data.length;

    // Background
    ctx.clearRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = 'rgba(107,100,96,0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (H - padding * 2) * (i / 4);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(W - padding, y);
      ctx.stroke();
    }

    // Bars
    data.forEach((val, i) => {
      const x = padding + gap * i + (gap - barW) / 2;
      const barH = ((val / max) * (H - padding * 2));
      const y = H - padding - barH;

      // Gold gradient
      const grad = ctx.createLinearGradient(x, y, x, H - padding);
      grad.addColorStop(0, '#C9A84C');
      grad.addColorStop(1, 'rgba(201,168,76,0.3)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [3, 3, 0, 0]);
      ctx.fill();

      // Label
      ctx.fillStyle = 'rgba(107,100,96,0.8)';
      ctx.font = '11px DM Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[i], x + barW / 2, H - padding + 16);

      // Value
      ctx.fillStyle = '#C9A84C';
      ctx.font = '500 11px DM Sans, sans-serif';
      ctx.fillText(val, x + barW / 2, y - 6);
    });
  }

  function drawLineChart(canvasId, data, labels) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const padding = 40;
    const max = Math.max(...data) * 1.2;
    const min = 0;
    const points = data.map((val, i) => ({
      x: padding + (W - padding * 2) / (data.length - 1) * i,
      y: H - padding - ((val - min) / (max - min)) * (H - padding * 2)
    }));

    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(107,100,96,0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (H - padding * 2) * (i / 4);
      ctx.beginPath(); ctx.moveTo(padding, y); ctx.lineTo(W - padding, y); ctx.stroke();
    }

    // Area fill
    const areaGrad = ctx.createLinearGradient(0, padding, 0, H);
    areaGrad.addColorStop(0, 'rgba(201,168,76,0.2)');
    areaGrad.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = areaGrad;
    ctx.beginPath();
    ctx.moveTo(points[0].x, H - padding);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, H - padding);
    ctx.closePath();
    ctx.fill();

    // Line
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    points.forEach((p, i) => { i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
    ctx.stroke();

    // Dots
    points.forEach(p => {
      ctx.fillStyle = '#C9A84C';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#0A0A0A';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Labels
    labels.forEach((label, i) => {
      ctx.fillStyle = 'rgba(107,100,96,0.8)';
      ctx.font = '11px DM Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label, points[i].x, H - padding + 16);
    });
  }

  function init() {
    // Overview bar chart
    drawBarChart('revenueChart',
      [42, 58, 35, 72, 65, 88, 95],
      ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    );

    // Project progress line chart
    drawLineChart('progressChart',
      [20, 35, 28, 55, 62, 48, 75, 82],
      ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
    );
  }

  return { init, drawBarChart, drawLineChart };
})();

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  DashSidebar.init();
  initDashNav();
  Notifications.init();
  MaterialSelector.init();

  // Overlay for mobile sidebar
  const overlayEl = document.createElement('div');
  overlayEl.className = 'sidebar-overlay';
  overlayEl.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 190;
    display: none; opacity: 0; transition: opacity 0.3s;
  `;
  overlayEl.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.remove('open');
    overlayEl.style.display = 'none';
    document.body.style.overflow = '';
  });
  document.body.appendChild(overlayEl);

  document.querySelector('.dash-topbar__hamburger')?.addEventListener('click', () => {
    overlayEl.style.display = 'block';
    setTimeout(() => overlayEl.style.opacity = '1', 10);
  });

  document.querySelector('.sidebar__close')?.addEventListener('click', () => {
    overlayEl.style.opacity = '0';
    setTimeout(() => overlayEl.style.display = 'none', 300);
  });

  // Init charts after a short delay
  setTimeout(() => DashChart.init(), 100);
});
