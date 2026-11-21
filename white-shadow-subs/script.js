(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  const menuLabel = toggle?.querySelector('.sr-only');

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    if (menuLabel) menuLabel.textContent = 'فتح قائمة التنقل';
  }

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
    if (menuLabel) menuLabel.textContent = open ? 'فتح قائمة التنقل' : 'إغلاق قائمة التنقل';
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
