/* AMSCO — Shared JS */

// ── Mobile menu ──
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ── Active nav link ──
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── Scroll nav shadow ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 40 ? '0 4px 40px rgba(0,0,0,0.6)' : 'none';
}, { passive: true });
