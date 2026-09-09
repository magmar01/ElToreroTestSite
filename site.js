/* Navigation behavior only. Menu content is maintained in menu.js. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const close = document.querySelector('.menu-close');
  const menuContainer = document.querySelector('[data-menu]');
  const menuTrigger = document.querySelector('[data-menu-trigger]');
  if (!toggle || !nav) return;

  const firstLink = nav.querySelector('a');
  let returnFocus = null;

  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (!open) {
      nav.classList.remove('menu-expanded');
      menuTrigger?.setAttribute('aria-expanded', 'false');
    }

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

  menuTrigger?.addEventListener('click', () => {
    const expanded = nav.classList.toggle('menu-expanded');
    menuTrigger.setAttribute('aria-expanded', String(expanded));
  });

  nav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;

    // Menu category links scroll to their section without ever putting a
    // #menu-section-N fragment into the GitHub Pages URL.
    if (link.classList.contains('menu-category-link')) {
      event.preventDefault();
      const targetSelector = link.dataset.target;
      const target = targetSelector ? document.querySelector(targetSelector) : null;
      setOpen(false);

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', window.location.pathname + window.location.search);
        });
      } else {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      return;
    }

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
  const buildMenuCategoryLinks = () => {
    if (!menuContainer || !Array.isArray(window.MENU) || !menuTrigger) return;

    nav.querySelector('.menu-category-list')?.remove();

    const menuList = document.createElement('div');
    menuList.className = 'menu-category-list';

    let sections = window.MENU.map((section, index) => ({ section, index }));

    // On desktop, mirror the actual balanced column order so the hamburger
    // categories follow the reorganized desktop menu. Mobile keeps MENU order.
    if (window.matchMedia('(min-width: 901px)').matches) {
      const columns = [...menuContainer.querySelectorAll('.menu-column')];
      const orderedIds = columns.flatMap(column =>
        [...column.querySelectorAll(':scope > .menu-block')].map(block => block.id)
      );
      const ordered = orderedIds
        .map(id => Number(id.replace('menu-section-', '')) - 1)
        .filter(index => Number.isInteger(index) && index >= 0 && index < window.MENU.length);
      if (ordered.length === window.MENU.length) {
        sections = ordered.map(index => ({ section: window.MENU[index], index }));
      }
    }

    sections.forEach(({ section, index }) => {
      const link = document.createElement('a');
      // Use the page URL itself as the fallback href so even if JavaScript
      // fails or an old cached script is served, no hash fragment is added.
      link.href = window.location.pathname + window.location.search;
      link.dataset.target = `#menu-section-${index + 1}`;
      link.textContent = section.title;
      link.className = 'menu-category-link';
      menuList.append(link);
    });

    menuTrigger.insertAdjacentElement('afterend', menuList);
  };

  if (typeof MENU !== 'undefined') window.MENU = MENU;
  buildMenuCategoryLinks();

  menuContainer?.addEventListener('menu-layout-updated', buildMenuCategoryLinks);

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
