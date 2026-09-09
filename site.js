/* Navigation behavior only. Menu content is maintained in menu.js. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const close = document.querySelector('.menu-close');
  const menuContainer = document.querySelector('[data-menu]');
  if (!toggle || !nav) return;

  const firstLink = nav.querySelector('a');
  let returnFocus = null;

  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');

    if (open) {
      returnFocus = document.activeElement;
      requestAnimationFrame(() => firstLink?.focus());
    } else if (returnFocus instanceof HTMLElement) {
      requestAnimationFrame(() => returnFocus.focus());
      returnFocus = null;
    }
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  close?.addEventListener('click', () => setOpen(false));

  nav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    setOpen(false);
  });

  document.addEventListener('click', event => {
    if (!nav.classList.contains('is-open')) return;
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      event.preventDefault();
      setOpen(false);
    }
  });

  // Build the Menu category list from the same MENU data used to render the page.
  // This keeps navigation automatically in sync when menu sections are added/renamed.
  const buildMenuCategoryLinks = () => {
    if (!menuContainer || !Array.isArray(window.MENU)) return;

    const menuList = document.createElement('div');
    menuList.className = 'menu-category-list';

    window.MENU.forEach((section, index) => {
      const id = `menu-section-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = section.title;
      link.className = 'menu-category-link';
      menuList.append(link);
    });

    const menuTrigger = nav.querySelector('[data-menu-trigger]');
    if (menuTrigger) menuTrigger.insertAdjacentElement('afterend', menuList);
  };

  // MENU is a top-level const in menu.js, so expose it to this navigation script.
  // menu.js loads before site.js.
  if (typeof MENU !== 'undefined') window.MENU = MENU;
  buildMenuCategoryLinks();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'El Torero Mexican Restaurant',
    url: 'https://eltoreroduluth.com/',
    telephone: '+1-770-476-4320',
    servesCuisine: ['Mexican'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3656 Satellite Boulevard',
      addressLocality: 'Duluth',
      addressRegion: 'GA',
      postalCode: '30043',
      addressCountry: 'US'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '21:00'
    }]
  };

  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify(structuredData);
  document.head.append(schema);
})();
