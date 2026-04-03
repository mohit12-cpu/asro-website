// ── ASRO SHARED JS ──

// Active nav link
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mainNav   = document.querySelector('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => mainNav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!mainNav.contains(e.target)) mainNav.classList.remove('open');
  });
}

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (entry.target.dataset.delay || 0) + 'ms';
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  revealObserver.observe(el);
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) nav.style.boxShadow = '0 4px 24px rgba(26,58,92,0.15)';
  else nav.style.boxShadow = '0 2px 16px rgba(26,58,92,0.1)';
});
