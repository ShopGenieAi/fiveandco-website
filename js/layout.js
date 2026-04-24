// Custom SVG logo with hand-drawn 5& paths — no background, works everywhere
const SVG_DEFS = `
  <defs>
    <linearGradient id="goldG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="40%" stop-color="#F5D77A"/>
      <stop offset="75%" stop-color="#C9A43B"/>
      <stop offset="100%" stop-color="#A67C1B"/>
    </linearGradient>
  </defs>
`;

const SVG_PATHS = `
  <!-- Custom 5 -->
  <path d="M220 180 L420 180 Q470 180 460 220 L440 300 Q430 340 380 340 L300 340 Q260 340 260 380 Q260 430 320 430 L400 430 Q480 430 520 500 Q560 570 480 600 Q400 630 300 600"
    fill="none" stroke="url(#goldG)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Custom & -->
  <path d="M420 420 Q520 300 620 380 Q700 450 620 520 Q560 570 480 540 Q420 510 420 460 Q420 400 500 360"
    fill="none" stroke="url(#goldG)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Divider -->
  <line x1="720" y1="160" x2="720" y2="560" stroke="url(#goldG)" stroke-width="2"/>
  <!-- Wordmark -->
  <text x="820" y="350" font-size="150" font-family="Cormorant Garamond, Georgia, serif" letter-spacing="2" fill="url(#goldG)">Five&amp;Co</text>
  <!-- Tagline -->
  <text x="820" y="460" font-size="46" font-family="Helvetica, Arial, sans-serif" letter-spacing="8" fill="url(#goldG)">DIGITAL DESIGN &amp; WEB STRATEGY</text>
`;

const SVG_LOGO_NAV = `<svg viewBox="0 0 2000 700" xmlns="http://www.w3.org/2000/svg" style="height:80px;width:auto;display:block;">${SVG_DEFS}${SVG_PATHS}</svg>`;
const SVG_LOGO_HERO = `<svg viewBox="0 0 2000 700" xmlns="http://www.w3.org/2000/svg" style="height:clamp(140px,18vw,240px);width:auto;display:block;">${SVG_DEFS}${SVG_PATHS}</svg>`;
const SVG_LOGO_FOOTER = `<svg viewBox="0 0 2000 700" xmlns="http://www.w3.org/2000/svg" style="height:110px;width:auto;display:block;">${SVG_DEFS}${SVG_PATHS}</svg>`;

// Store hero SVG for homepage
window._heroSVG = SVG_LOGO_HERO;

const NAV_HTML = `
<nav class="nav" id="nav">
  <a href="index.html" class="nav-logo-img" style="text-decoration:none;">
    ${SVG_LOGO_NAV}
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="services.html">Services</a></li>
    <li><a href="process.html">Process</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html" class="nav-cta">Get a Quote</a></li>
  </ul>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>
`;

const FOOTER_HTML = `
<footer style="background:#0A0A0A;border-top:1px solid rgba(212,175,55,0.2);padding:3rem 5%;">
  <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
    <a href="index.html" style="text-decoration:none;">
      ${SVG_LOGO_FOOTER}
    </a>
    <ul style="display:flex;gap:2rem;list-style:none;flex-wrap:wrap;">
      <li><a href="services.html" style="font-size:0.75rem;color:rgba(255,255,255,0.45);text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;" onmouseover="this.style.color='#D4AF37'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">Services</a></li>
      <li><a href="pricing.html" style="font-size:0.75rem;color:rgba(255,255,255,0.45);text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;" onmouseover="this.style.color='#D4AF37'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">Pricing</a></li>
      <li><a href="about.html" style="font-size:0.75rem;color:rgba(255,255,255,0.45);text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;" onmouseover="this.style.color='#D4AF37'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">About</a></li>
      <li><a href="contact.html" style="font-size:0.75rem;color:rgba(255,255,255,0.45);text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;" onmouseover="this.style.color='#D4AF37'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">Contact</a></li>
    </ul>
    <div style="font-size:0.75rem;color:rgba(255,255,255,0.25);font-weight:300;">© 2026 Five&amp;Co · fiveandco.co.nz</div>
  </div>
</footer>
`;

document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
