/* Development safeguard for the menu data. Does not change menu content or layout. */
(() => {
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof MENU === 'undefined') {
      console.error('Menu data could not be loaded. Check menu.js.');
      return;
    }

    const errors = [];

    if (!Array.isArray(MENU) || MENU.length === 0) {
      errors.push('MENU must be a non-empty array.');
    } else {
      MENU.forEach((section, sectionIndex) => {
        if (!section || typeof section.title !== 'string' || !section.title.trim()) {
          errors.push(`Section ${sectionIndex + 1} is missing a title.`);
        }

        if (!Array.isArray(section?.items)) {
          errors.push(`Section ${sectionIndex + 1} must contain an items array.`);
          return;
        }

        section.items.forEach((item, itemIndex) => {
          const label = `Section ${sectionIndex + 1}, item ${itemIndex + 1}`;
          if (!item || typeof item.name !== 'string' || !item.name.trim()) {
            errors.push(`${label} is missing a name.`);
          }
          if (!item || typeof item.price !== 'string' || !item.price.trim()) {
            errors.push(`${label} is missing a price.`);
          }
          if (item?.description !== undefined && typeof item.description !== 'string') {
            errors.push(`${label} has an invalid description.`);
          }
        });
      });
    }

    if (errors.length) {
      console.error('El Torero menu validation failed:', errors);
    }
  });
})();
