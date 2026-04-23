const NAV_HTML = `
<nav class="nav" id="nav">
  <a href="index.html" class="nav-logo-img">
    <img src="images/white_logo.png" alt="Five&Co — Digital Design & Web Strategy" style="height:64px;width:auto;display:block;object-fit:contain;">
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
<footer style="background:#111;border-top:1px solid rgba(212,175,55,0.2);padding:3rem 5%;">
  <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
    <div>
      <img src="images/white_logo.png" alt="Five&Co" style="height:80px;width:auto;display:block;object-fit:contain;margin-bottom:0.5rem;">
    </div>
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
