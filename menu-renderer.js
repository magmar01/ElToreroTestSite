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

    const main = document.createElement('div');
    main.className = 'menu-main';
    main.append(createTextElement('span', 'menu-name', itemData.name));
    main.append(document.createElement('span')).className = 'menu-dots';

    item.append(main);
    item.append(createTextElement('span', 'menu-price', itemData.price));

    if (itemData.description) {
      item.append(createTextElement('small', 'menu-desc', itemData.description));
    }

    return item;
  };

  const createMenuSection = (sectionData, index) => {
    const section = document.createElement('section');
    section.className = 'menu-block';
    section.id = `menu-section-${index + 1}`;

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

    MENU.forEach((sectionData, index) => {
      const columnIndex = index < split ? 0 : 1;
      columns[columnIndex].append(createMenuSection(sectionData, index));
    });

    columns.forEach(column => target.append(column));
  };

  window.addEventListener('DOMContentLoaded', renderMenu);
})();
