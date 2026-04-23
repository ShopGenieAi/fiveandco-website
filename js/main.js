// ─── NAV SCROLL ───
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ─── MOBILE NAV ───
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    navLinks.classList.contains('open')
      ? (spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)',
         spans[1].style.opacity = '0',
         spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)')
      : (spans[0].style.transform = '', spans[1].style.opacity = '', spans[2].style.transform = '');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => s.style = '');
    });
  });
}

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.style.color = 'var(--gold-light)';
  }
});
