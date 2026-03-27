/* Shared Nav/Footer Injection - run on all pages */
const NAVBAR_HTML = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="navbar__inner">
    <a href="../index.html" class="navbar__logo" aria-label="Aura Arch Home">
      <div class="navbar__logo-mark">SN</div>
      <span class="navbar__logo-text">Aura Arch</span>
    </a>
    <ul class="navbar__nav" role="list">
      <li class="navbar__nav-item">
        <a href="../index.html" class="navbar__nav-link">Home <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="navbar__dropdown">
          <a href="../index.html">Home Page 1</a>
          <a href="home2.html">Home Page 2</a>
        </div>
      </li>
      <li class="navbar__nav-item"><a href="about.html" class="navbar__nav-link">About</a></li>
      <li class="navbar__nav-item"><a href="services.html" class="navbar__nav-link">Services</a></li>
      <li class="navbar__nav-item"><a href="portfolio.html" class="navbar__nav-link">Portfolio</a></li>
      <li class="navbar__nav-item"><a href="blog.html" class="navbar__nav-link">Journal</a></li>
      <li class="navbar__nav-item"><a href="contact.html" class="navbar__nav-link">Contact</a></li>
      <li class="navbar__nav-item">
        <a href="dashboard-user/index.html" class="navbar__nav-link">Dashboard <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="navbar__dropdown">
          <a href="dashboard-user/index.html">User Dashboard</a>
          <a href="dashboard-admin/index.html">Admin Dashboard</a>
        </div>
      </li>
    </ul>
    <div class="navbar__actions">
      <button class="navbar__icon-btn theme-btn" aria-label="Toggle dark mode">
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
      </button>
      <button class="navbar__icon-btn rtl-btn" aria-label="Toggle RTL">RTL</button>
      <a href="login.html" class="btn btn--ghost">Login</a>
    </div>
    <button class="navbar__hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="navbar__mobile">
  <a href="../index.html" class="navbar__mobile-link">Home</a>
  <a href="about.html" class="navbar__mobile-link">About</a>
  <a href="services.html" class="navbar__mobile-link">Services</a>
  <a href="portfolio.html" class="navbar__mobile-link">Portfolio</a>
  <a href="blog.html" class="navbar__mobile-link">Journal</a>
  <a href="contact.html" class="navbar__mobile-link">Contact</a>
  <a href="dashboard-user/index.html" class="navbar__mobile-link">User Dashboard</a>
  <a href="dashboard-admin/index.html" class="navbar__mobile-link">Admin Dashboard</a>
</div>`;
