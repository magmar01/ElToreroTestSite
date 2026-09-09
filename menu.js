/*
 * EL TORERO MENU DATA
 *
 * Edit this file when menu names, descriptions, or prices change.
 * The page markup and styling do not need to change for normal menu updates.
 */
const MENU = [
  {
    title: 'Appetizers',
    items: [
      { name: 'CHEESE DIP', price: '9.50' },
      { name: 'GUACAMOLE DIP', price: '9.50', description: 'CREAMY OR CHUNKY' },
      { name: 'QUESADILLA', price: '5.00', description: 'CHEESE TURNOVER' },
      { name: 'SPECIAL QUESADILLA', price: '8.00', description: 'QUESADILLA SERVED WITH LETTUCE, GUACAMOLE & SOUR CREAM' },
      { name: 'STUFFED QUESADILLA', price: '7.50', description: 'QUESADILLA STUFFED WITH YOUR CHOICE OF FLANK STEAK, GROUND BEEF, CHICKEN, PORK, CHORIZO, MUSHROOMS OR SPINACH' },
      { name: 'SPECIAL STUFFED QUESADILLA', price: '10.50', description: 'STUFFED QUESADILLA SERVED WITH LETTUCE, GUACAMOLE & SOUR CREAM' },
      { name: 'QUESADILLA PLATTER', price: '16.75', description: 'YOUR CHOICE OF TWO QUESADILLAS SERVED WITH LETTUCE, GUACAMOLE, SOUR CREAM & PICO DE GALLO' },
      { name: 'THREE TAQUITOS', price: '9.00', description: 'YOUR CHOICE OF CHICKEN, PORK, OR FLANK STEAK STUFFED IN A CORN TORTILLA AND DEEP FRIED; SERVED WITH GUACAMOLE, SOUR CREAM & PICO DE GALLO FOR DIPPING' },
      { name: 'CHEESE NACHOS', price: '10.25' },
      { name: 'HALF-ORDER CHEESE NACHOS', price: '7.50' },
      { name: 'NACHOS', price: '8.50', description: 'WITH YOUR CHOICE OF BEEF, CHICKEN, PORK, RICE, OR BEANS' },
      { name: 'NACHOS', price: '9.25', description: 'WITH YOUR CHOICE OF BEEF WITH BEANS, CHICKEN WITH BEANS, OR CHORIZO WITH BEANS' },
      { name: 'HALF-ORDER NACHOS', price: '6.50' },
      { name: 'HALF-ORDER NACHOS', price: '7.00' },
      { name: 'SPECIAL NACHOS', price: '11.00', description: 'NACHOS TOPPED WITH CHICKEN, BEANS, LETTUCE, GUACAMOLE & SOUR CREAM' },
      { name: 'HALF-ORDER SPECIAL NACHOS', price: '7.75' }
    ]
  },
  {
    title: 'Soups & Salads',
    items: [
      { name: 'GUACAMOLE SALAD', price: '6.25', description: 'LETTUCE, TOMATO, AND GUACAMOLE' },
      { name: 'TACO SALAD', price: '10.00', description: 'LETTUCE, TOMATO, BEEF, & SHREDDED CHEESE SERVED IN A CRISPY, FLOUR TORTILLA BOWL' },
      { name: 'SPECIAL TACO SALAD', price: '11.25', description: 'LETTUCE, TOMATO, BEEF, SHREDDED CHEESE, GUACAMOLE, & SOUR CREAM SERVED IN A CRISPY FLOUR TORTILLA BOWL' },
      { name: 'NACHO CHEESE SALAD', price: '8.75', description: 'LETTUCE, TOMATO, BEEF, & MELTED NACHO CHEESE SAUCE SERVED IN A CRISPY FLOUR TORTILLA BOWL' },
      { name: 'SPECIAL NACHO CHEESE SALAD', price: '9.75', description: 'NACHO CHEESE SALAD TOPPED WITH GUACAMOLE & SOUR CREAM' },
      { name: 'TORTILLA SOUP WITH CHICKEN OR SHRIMP', price: '10.25' },
      { name: 'POZOLE SOUP', price: '10.25', description: 'HOMINY WITH PORK OR CHICKEN' }
    ]
  },
  {
    title: 'Lunch',
    items: [
      { name: 'SPEEDY GONZALEZ', price: '9.10', description: 'TACO, ENCHILADA, AND YOUR CHOICE OF RICE OR BEANS' },
      { name: 'SPECIAL LUNCH #1', price: '10.95', description: 'CHILE RELLENO, TACO, BEANS & GUACAMOLE SALAD' },
      { name: 'SPECIAL LUNCH #2', price: '9.95', description: 'BURRITO, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #3', price: '9.95', description: 'CHALUPA, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #4', price: '9.10', description: 'TACO, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #5', price: '9.95', description: 'BURRITO, TACO & BEANS' },
      { name: 'SPECIAL LUNCH #6', price: '9.95', description: 'CHILE RELLENO, BEANS AND ENCHILADA' },
      { name: 'SPECIAL LUNCH #7', price: '10.95', description: 'CHIMICHANGA WITH CHEESE SAUCE, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #8', price: '9.95', description: 'QUESADILLA, CHILE RELLENO & RICE' },
      { name: 'SPECIAL LUNCH #9', price: '9.10', description: 'ENCHILADA, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #10', price: '9.95', description: 'CHALUPA, RICE & TACO' },
      { name: 'SPECIAL LUNCH #11', price: '9.10', description: 'ONE FLAUTA, LETTUCE, SOUR CREAM, GUACAMOLE, & PICO DE GALLO' },
      { name: 'SPECIAL LUNCH #12', price: '9.95', description: 'ONE FLAUTA, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #13', price: '9.10', description: 'ONE TAMALE, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #14', price: '9.95', description: 'ONE CHILE RELLENO, RICE & BEANS' },
      { name: 'SPECIAL LUNCH #15', price: '10.45', description: 'ONE STUFFED QUESADILLA WITH RICE & BEANS' }
    ]
  },
  {
    title: 'A La Carte',
    items: [
      { name: 'ORDER OF BEANS', price: '3.00' },
      { name: 'ORDER OF RICE', price: '3.00' },
      { name: 'ORDER OF TACOS (3)', price: '10.25', description: 'BEEF, BEAN, PORK, OR CHICKEN' },
      { name: 'ORDER OF TAMALES (3)', price: '11.00', description: 'BEEF, CHICKEN, PORK OR CHEESE' },
      { name: 'ORDER OF ENCHILADAS (3)', price: '11.00', description: 'BEEF, BEAN, CHICKEN, PORK, OR CHEESE' },
      { name: 'ORDER OF BEEF TOSTADAS (2)', price: '11.00' },
      { name: 'ORDER OF BURRITOS (2)', price: '11.00' },
      { name: 'ORDER OF CHALUPAS (2)', price: '11.00' },
      { name: 'ORDER OF CHILE RELLENOS (2)', price: '11.00' },
      { name: 'ORDER OF TOSTAGUACS (2)', price: '13.75' },
      { name: 'ONE CHIMICHANGA WITH CHEESE SAUCE', price: '9.50' },
      { name: 'ONE FLAUTA', price: '4.75' },
      { name: 'ORD. OF CHICKEN, GROUND BEEF OR PORK', price: '3.50' },
      { name: 'ORDER OF FISH TACOS (3)', price: '14.50', description: 'PAN SEARED TILAPIA WITH COLE SLAW IN A FLOUR TORTILLA' },
      { name: 'ONE FISH TACO', price: '5.50' }
    ]
  },
  {
    title: 'Side Orders',
    items: [
      { name: 'SMALL SIDE', price: '1.00' },
      { name: 'LARGE SIDE', price: '1.75' },
      { name: 'ORDER OF FRENCH FRIES', price: '3.25' },
      { name: 'ORDER OF LETTUCE', price: '2.00' },
      { name: 'ORDER OF FLOUR TORTILLAS (2)', price: '2.00' },
      { name: 'ORDER OF CORN TORTILLAS (4)', price: '2.00' },
      { name: 'SINGLE BURRITO', price: '7.25', description: 'BEEF, BEAN, CHICKEN, PORK OR CHEESE' },
      { name: 'CHALUPA', price: '7.25' },
      { name: 'CHILE RELLENO', price: '7.25', description: 'BEEF, BEAN, CHICKEN, CHEESE OR PORK' },
      { name: 'SINGLE ENCHILADA', price: '4.25', description: 'BEEF, BEAN, CHICKEN, CHEESE OR PORK' },
      { name: 'SINGLE TACO', price: '3.40', description: 'BEEF, BEAN, CHICKEN OR PORK' },
      { name: 'SINGLE TAMALE', price: '4.25', description: 'BEEF, CHICKEN, CHEESE OR PORK' },
      { name: 'BEEF TOSTADA', price: '7.25' },
      { name: 'TOSTAGUAC', price: '9.00' },
      { name: 'SMALL SOUR CREAM (3oz.)', price: '1.00' },
      { name: 'SMALL GUACAMOLE DIP (3oz.)', price: '3.75' },
      { name: 'SMALL CHEESE DIP (3oz.)', price: '3.75' },
      { name: 'SMALL ORDER MUSHROOMS/SPINACH', price: '2.75' },
      { name: 'GRILLED ONIONS', price: '1.75' },
      { name: 'GRILLED CERRANO PEPPERS', price: '1.75' },
      { name: 'SAUTEED BELL PEPPERS & ONIONS', price: '3.50' },
      { name: 'SLICED AVOCADO', price: '3.25' }
    ]
  },
  {
    title: "Child's Plate",
    items: [
      { name: '#1', price: '6.50', description: 'ONE TACO, RICE & BEANS' },
      { name: '#2', price: '6.50', description: 'ONE TACO, ONE ENCHILADA & RICE' },
      { name: '#3', price: '6.50', description: 'ONE QUESADILLA, RICE & BEANS' },
      { name: '#4', price: '6.50', description: 'ONE BURRITO & RICE' },
      { name: '#5', price: '6.50', description: 'ONE ENCHILADA, RICE AND BEANS' },
      { name: '#6', price: '6.50', description: 'ONE QUESADILLA, ONE TACO & RICE' },
      { name: '#7', price: '6.50', description: 'POLLO AZADO & FRENCH FRIES OR RICE' },
      { name: '#8', price: '6.50', description: 'QUESADILLA & FRENCH FRIES' }
    ]
  },
  {
    title: 'Dessert',
    items: [
      { name: 'SOAPAPILLA', price: '3.50' },
      { name: 'SOAPAPILLA A LA MODE', price: '5.25' },
      { name: 'FRIED ICE CREAM', price: '5.25' },
      { name: 'FLAN', price: '5.25', description: 'MEXICAN CARAMEL CUSTARD' },
      { name: 'SCOOP OF ICE CREAM', price: '3.00' }
    ]
  },
  {
    title: 'Soft Drinks',
    items: [
      { name: 'SOFT DRINKS', price: '3.25', description: 'COKE, CHERRY COKE, DIET COKE, MR. PIBB, SPRITE, LEMONADE, ICED TEA' },
      { name: 'MILK, COFFEE, GREEN TEA', price: '3.25' },
      { name: 'SHIRLEY TEMPLE', price: '3.25' },
      { name: 'MILKSHAKE', price: '3.85', description: 'VANILLA' },
      { name: 'AGUA DE HORCHATA', price: '3.35', description: 'SWEET RICE WATER' }
    ]
  }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

function createMenuSection(section) {
  const block = document.createElement('section');
  block.className = 'menu-block';
  block.innerHTML = `<h2>${escapeHtml(section.title)}</h2><ul class="menu-list"></ul>`;

  const list = block.querySelector('.menu-list');
  section.items.forEach(itemData => {
    const item = document.createElement('li');
    item.className = 'menu-item';

    const description = itemData.description
      ? `<small class="menu-desc">${escapeHtml(itemData.description)}</small>`
      : '';

    item.innerHTML = `
      <span class="menu-name">${escapeHtml(itemData.name)}</span>
      <span class="menu-price">${escapeHtml(itemData.price)}</span>
      ${description}
    `;
    list.append(item);
  });

  return block;
}

function renderMenu() {
  const root = document.querySelector('[data-menu]');
  if (!root) return;

  const columns = [
    document.createElement('div'),
    document.createElement('div')
  ];
  columns.forEach(column => {
    column.className = 'menu-column';
    root.append(column);
  });

  const splitIndex = Math.ceil(MENU.length / 2);
  MENU.forEach((section, index) => {
    const column = index < splitIndex ? columns[0] : columns[1];
    column.append(createMenuSection(section));
  });
}

document.addEventListener('DOMContentLoaded', renderMenu);
