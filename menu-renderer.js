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

    // Pitcher margaritas need the same full-width desktop separator layout
    // even when their name falls below the long-name threshold.
    if (itemData.name.toUpperCase().includes('PITCHER')) {
      item.classList.add('menu-item--pitcher');
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

    // First measure every section at the real desktop column width. Section
    // heights are independent, so we can then find a near-optimal partition
    // instead of greedily filling the currently shorter column. This greatly
    // reduces the empty area at the bottom of one column.
    sections.forEach(section => columns[0].append(section));
    const heights = sections.map(section => section.getBoundingClientRect().height);
    const total = heights.reduce((sum, height) => sum + height, 0);
    const targetHeight = total / 2;

    // Dynamic programming finds the subset whose total height is closest to
    // half of the menu. The original section order is retained inside each
    // resulting column, and this is desktop-only; mobile remains sequential.
    const reachable = new Map([[0, []]]);
    sections.forEach((section, index) => {
      const height = heights[index];
      const entries = Array.from(reachable.entries());
      entries.forEach(([sum, indexes]) => {
        const nextSum = sum + height;
        if (nextSum <= targetHeight && !reachable.has(nextSum)) {
          reachable.set(nextSum, [...indexes, index]);
        }
      });
    });

    let bestSum = 0;
    reachable.forEach((indexes, sum) => {
      if (sum > bestSum) bestSum = sum;
    });

    const firstColumnIndexes = new Set(reachable.get(bestSum) || []);
    const firstColumn = [];
    const secondColumn = [];
    sections.forEach((section, index) => {
      (firstColumnIndexes.has(index) ? firstColumn : secondColumn).push(section);
    });

    columns[0].replaceChildren(...firstColumn);
    columns[1].replaceChildren(...secondColumn);
  };

  const renderMobileSequential = (target, sections) => {
    const column = document.createElement('div');
    column.className = 'menu-column';
    column.dataset.menuColumn = 'mobile';
    sections.forEach(section => column.append(section));
    target.append(column);
  };

  const renderMenu = async () => {
    const target = document.querySelector('[data-menu]');
    if (!target || typeof MENU === 'undefined') return;

    const desktop = window.matchMedia('(min-width: 901px)').matches;

    // The balancing calculation depends on the actual Josefin Sans/Rye/etc.
    // font metrics. Wait for web fonts so the measured section heights match
    // the heights users actually see after the fonts finish loading.
    if (desktop && document.fonts?.ready) {
      await document.fonts.ready;
    }

    target.replaceChildren();
    const sections = MENU.map((sectionData, index) => createMenuSection(sectionData, index));

    if (desktop) {
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
