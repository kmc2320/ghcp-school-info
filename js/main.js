const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const globalNav = document.getElementById('global-nav');
const navLinks = document.querySelectorAll('.global-nav a[href^="#"]');

if (menuToggle && globalNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    body.classList.toggle('menu-open', !isExpanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSelector = link.getAttribute('href');

    if (!targetSelector) {
      return;
    }

    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    body.classList.remove('menu-open');
  });
});