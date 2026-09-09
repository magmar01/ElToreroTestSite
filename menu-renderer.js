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

  const renderMenu = () => {
    const target = document.querySelector('[data-menu]');
    if (!target || typeof MENU === 'undefined') return;

    target.replaceChildren();
    const columns = [document.createElement('div'), document.createElement('div')];
    columns.forEach(column => column.className = 'menu-column');
    const split = Math.ceil(MENU.length / 2);
    let specialOrders = null;

    MENU.forEach((sectionData, index) => {
      const section = createMenuSection(sectionData, index);

      // Keep El Torero Special Orders out of the normal index split.
      // It belongs at the bottom of the right-hand column on desktop.
      if (isSpecialOrders(sectionData)) {
        specialOrders = section;
        return;
      }

      const columnIndex = index < split ? 0 : 1;
      columns[columnIndex].append(section);
    });

    if (specialOrders) {
      columns[1].append(specialOrders);
    }

    columns.forEach(column => target.append(column));
  };

  window.addEventListener('DOMContentLoaded', renderMenu);
})();
