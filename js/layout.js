// Inline SVG logo — works perfectly on dark AND light backgrounds, no image files needed
const SVG_LOGO_NAV = `
<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style="height:80px;width:auto;display:block;">
  <defs>
    <linearGradient id="goldNav" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#F2D27A"/>
      <stop offset="100%" stop-color="#A67C1B"/>
    </linearGradient>
  </defs>
  <text x="60" y="280" font-size="280" fill="url(#goldNav)" font-family="Cormorant Garamond, Georgia, serif" font-weight="300">5&amp;</text>
  <line x1="420" y1="80" x2="420" y2="320" stroke="url(#goldNav)" stroke-width="1.5" opacity="0.6"/>
  <text x="450" y="210" font-size="130" fill="url(#goldNav)" font-family="Cormorant Garamond, Georgia, serif" font-weight="400" letter-spacing="4">Five&amp;Co</text>
  <text x="455" y="285" font-size="42" fill="url(#goldNav)" font-family="Arial, sans-serif" font-weight="300" letter-spacing="7">DIGITAL DESIGN &amp; WEB STRATEGY</text>
</svg>
`;

const SVG_LOGO_FOOTER = `
<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style="height:110px;width:auto;display:block;">
  <defs>
    <linearGradient id="goldFooter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#F2D27A"/>
      <stop offset="100%" stop-color="#A67C1B"/>
    </linearGradient>
  </defs>
  <text x="60" y="280" font-size="280" fill="url(#goldFooter)" font-family="Cormorant Garamond, Georgia, serif" font-weight="300">5&amp;</text>
  <line x1="420" y1="80" x2="420" y2="320" stroke="url(#goldFooter)" stroke-width="1.5" opacity="0.6"/>
  <text x="450" y="210" font-size="130" fill="url(#goldFooter)" font-family="Cormorant Garamond, Georgia, serif" font-weight="400" letter-spacing="4">Five&amp;Co</text>
  <text x="455" y="285" font-size="42" fill="url(#goldFooter)" font-family="Arial, sans-serif" font-weight="300" letter-spacing="7">DIGITAL DESIGN &amp; WEB STRATEGY</text>
</svg>
`;

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
