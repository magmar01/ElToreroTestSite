/*
 * EL TORERO MENU RENDERER
 *
 * Turns the plain MENU data into semantic DOM nodes.
 * Menu content stays separate from presentation and HTML structure.
 */
function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text ?? '';
  return element;
}

function createMenuItem(itemData) {
  const item = document.createElement('li');
  item.className = 'menu-item';

  const name = createTextElement('span', 'menu-name', itemData.name);
  const price = createTextElement('span', 'menu-price', itemData.price);

  item.append(name, price);

  if (itemData.description) {
    item.append(createTextElement('small', 'menu-desc', itemData.description));
  }

  return item;
}

function createMenuSection(sectionData) {
  const section = document.createElement('section');
  section.className = 'menu-block';

  const title = createTextElement('h2', 'menu-heading', sectionData.title);
  section.append(title);

  if (sectionData.note) {
    section.append(createTextElement('p', 'menu-note', sectionData.note));
  }

  const list = document.createElement('ul');
  list.className = 'menu-list';
  sectionData.items.forEach(itemData => list.append(createMenuItem(itemData)));
  section.append(list);

  return section;
}

function renderMenu() {
  const root = document.querySelector('[data-menu]');
  if (!root || !Array.isArray(MENU)) return;

  root.replaceChildren();

  const columns = [document.createElement('div'), document.createElement('div')];
  columns.forEach(column => {
    column.className = 'menu-column';
    root.append(column);
  });

  const splitIndex = Math.ceil(MENU.length / 2);
  MENU.forEach((sectionData, index) => {
    const column = index < splitIndex ? columns[0] : columns[1];
    column.append(createMenuSection(sectionData));
  });
}

document.addEventListener('DOMContentLoaded', renderMenu);
