const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const backToTopBtn = document.getElementById('backToTop');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
    event.preventDefault();
    const section = document.querySelector(target.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.focus({ preventScroll: true });
    }
  }
});
