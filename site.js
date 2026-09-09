/* Navigation behavior only. Menu content is maintained in menu.js. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const close = document.querySelector('.menu-close');
  if (!toggle || !nav) return;

  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  close?.addEventListener('click', () => setOpen(false));
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', event => {
    if (!nav.classList.contains('is-open')) return;
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setOpen(false);
  });

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
