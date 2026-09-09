/* Render menu data into accessible HTML. */
(() => {
  const createTextElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const createMenuItem = (itemData) => {
    const item = document.createElement('li');
    item.className = 'menu-item';

    if (itemData.name.length >= 30) {
      item.classList.add('menu-item--long');
    }

    item.append(createTextElement('span', 'menu-name', itemData.name));
    item.append(createTextElement('span', 'menu-price', itemData.price));

    if (itemData.description) {
      item.append(createTextElement('small', 'menu-desc', itemData.description));
    }

    return item;
  };

  const isSpecialOrders = (sectionData) => sectionData.title === 'El Torero Special Orders';

  const createMenuSection = (sectionData, index) => {
    const section = document.createElement('section');
    section.className = 'menu-block';
    section.id = `menu-section-${index + 1}`;

    if (isSpecialOrders(sectionData)) {
      section.classList.add('menu-block--special-orders');
    }

    section.append(createTextElement('h2', 'menu-heading', sectionData.title));

    if (sectionData.note) {
      section.append(createTextElement('p', 'menu-note', sectionData.note));
    }

    const list = document.createElement('ul');
    list.className = 'menu-list';
    sectionData.items.forEach(itemData => list.append(createMenuItem(itemData)));
    section.append(list);

    return section;
  };

  const renderDesktopBalanced = (target, sections) => {
    const columns = [document.createElement('div'), document.createElement('div')];
    columns.forEach(column => {
      column.className = 'menu-column';
      column.dataset.menuColumn = 'desktop';
      target.append(column);
    });

    // The columns are attached to the grid before measuring so every section
    // is measured at its real desktop column width. Then pack each section
    // into the currently shorter column for a balanced two-column layout.
    sections.forEach(section => {
      const heights = columns.map(column => column.getBoundingClientRect().height);
      const columnIndex = heights[0] <= heights[1] ? 0 : 1;
      columns[columnIndex].append(section);
    });
  };

  const renderMobileSequential = (target, sections) => {
    const column = document.createElement('div');
    column.className = 'menu-column';
    column.dataset.menuColumn = 'mobile';
    sections.forEach(section => column.append(section));
    target.append(column);
  };

  const renderMenu = () => {
    const target = document.querySelector('[data-menu]');
    if (!target || typeof MENU === 'undefined') return;

    target.replaceChildren();
    const sections = MENU.map((sectionData, index) => createMenuSection(sectionData, index));

    if (window.matchMedia('(min-width: 901px)').matches) {
      renderDesktopBalanced(target, sections);
    } else {
      renderMobileSequential(target, sections);
    }

    target.dispatchEvent(new CustomEvent('menu-layout-updated'));
  };

  window.addEventListener('DOMContentLoaded', renderMenu);
  window.addEventListener('resize', () => {
    const target = document.querySelector('[data-menu]');
    if (!target || typeof MENU === 'undefined') return;

    // Rebuild only when crossing the desktop/mobile breakpoint.
    const desktop = window.matchMedia('(min-width: 901px)').matches;
    const current = target.querySelector('.menu-column')?.dataset.menuColumn;
    const expected = desktop ? 'desktop' : 'mobile';
    if (current !== expected) renderMenu();
  });
})();
