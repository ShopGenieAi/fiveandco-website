// Shared nav HTML
const NAV_HTML = `
<nav class="nav" id="nav">
  <a href="index.html" class="nav-logo">Five&amp;Co</a>
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
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand">Five&amp;Co</div>
      <div class="footer-tagline">Digital Design &amp; Web Strategy</div>
    </div>
    <ul class="footer-links">
      <li><a href="services.html">Services</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="footer-copy">© 2026 Five&amp;Co · fiveandco.co.nz</div>
  </div>
</footer>
`;

// Inject nav and footer
document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
