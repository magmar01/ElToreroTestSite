/*
 * EL TORERO MENU DATA
 *
 * This is the ONLY file that should need editing for menu items, descriptions,
 * or prices. The page layout never needs to be changed when a menu price changes.
 */
const MENU = [
  {
    title: 'Appetizers',
    items: [
      ['CHEESE DIP', '9.50'],
      ['GUACAMOLE DIP', '9.50', 'CREAMY OR CHUNKY'],
      ['QUESADILLA', '5.00', 'CHEESE TURNOVER'],
      ['SPECIAL QUESADILLA', '8.00', 'QUESADILLA SERVED WITH LETTUCE, GUACAMOLE & SOUR CREAM'],
      ['STUFFED QUESADILLA', '7.50', 'QUESADILLA STUFFED WITH YOUR CHOICE OF FLANK STEAK, GROUND BEEF, CHICKEN, PORK, CHORIZO, MUSHROOMS OR SPINACH'],
      ['SPECIAL STUFFED QUESADILLA', '10.50', 'STUFFED QUESADILLA SERVED WITH LETTUCE, GUACAMOLE & SOUR CREAM'],
      ['QUESADILLA PLATTER', '16.75', 'YOUR CHOICE OF TWO QUESADILLAS SERVED WITH LETTUCE, GUACAMOLE, SOUR CREAM & PICO DE GALLO'],
      ['THREE TAQUITOS', '9.00', 'YOUR CHOICE OF CHICKEN, PORK, OR FLANK STEAK STUFFED IN A CORN TORTILLA AND DEEP FRIED; SERVED WITH GUACAMOLE, SOUR CREAM & PICO DE GALLO FOR DIPPING'],
      ['CHEESE NACHOS', '10.25'],
      ['HALF-ORDER CHEESE NACHOS', '7.50'],
      ['NACHOS', '8.50', 'WITH YOUR CHOICE OF BEEF, CHICKEN, PORK, RICE, OR BEANS'],
      ['NACHOS', '9.25', 'WITH YOUR CHOICE OF BEEF WITH BEANS, CHICKEN WITH BEANS, OR CHORIZO WITH BEANS'],
      ['HALF-ORDER NACHOS', '6.50'],
      ['HALF-ORDER NACHOS', '7.00'],
      ['SPECIAL NACHOS', '11.00', 'NACHOS TOPPED WITH CHICKEN, BEANS, LETTUCE, GUACAMOLE & SOUR CREAM'],
      ['HALF-ORDER SPECIAL NACHOS', '7.75']
    ]
  },
  {
    title: 'Soups & Salads',
    items: [
      ['GUACAMOLE SALAD', '6.25', 'LETTUCE, TOMATO, AND GUACAMOLE'],
      ['TACO SALAD', '10.00', 'LETTUCE, TOMATO, BEEF, & SHREDDED CHEESE SERVED IN A CRISPY, FLOUR TORTILLA BOWL'],
      ['SPECIAL TACO SALAD', '11.25', 'LETTUCE, TOMATO, BEEF, SHREDDED CHEESE, GUACAMOLE, & SOUR CREAM SERVED IN A CRISPY FLOUR TORTILLA BOWL'],
      ['NACHO CHEESE SALAD', '8.75', 'LETTUCE, TOMATO, BEEF, & MELTED NACHO CHEESE SAUCE SERVED IN A CRISPY FLOUR TORTILLA BOWL'],
      ['SPECIAL NACHO CHEESE SALAD', '9.75', 'NACHO CHEESE SALAD TOPPED WITH GUACAMOLE & SOUR CREAM'],
      ['TORTILLA SOUP WITH CHICKEN OR SHRIMP', '10.25'],
      ['POZOLE SOUP', '10.25', 'HOMINY WITH PORK OR CHICKEN']
    ]
  },
  {
    title: 'Lunch',
    items: [
      ['SPEEDY GONZALEZ', '9.10', 'TACO, ENCHILADA, AND YOUR CHOICE OF RICE OR BEANS'],
      ['SPECIAL LUNCH #1', '10.95', 'CHILE RELLENO, TACO, BEANS & GUACAMOLE SALAD'],
      ['SPECIAL LUNCH #2', '9.95', 'BURRITO, RICE & BEANS'],
      ['SPECIAL LUNCH #3', '9.95', 'CHALUPA, RICE & BEANS'],
      ['SPECIAL LUNCH #4', '9.10', 'TACO, RICE & BEANS'],
      ['SPECIAL LUNCH #5', '9.95', 'BURRITO, TACO & BEANS'],
      ['SPECIAL LUNCH #6', '9.95', 'CHILE RELLENO, BEANS AND ENCHILADA'],
      ['SPECIAL LUNCH #7', '10.95', 'CHIMICHANGA WITH CHEESE SAUCE, RICE & BEANS'],
      ['SPECIAL LUNCH #8', '9.95', 'QUESADILLA, CHILE RELLENO & RICE'],
      ['SPECIAL LUNCH #9', '9.10', 'ENCHILADA, RICE & BEANS'],
      ['SPECIAL LUNCH #10', '9.95', 'CHALUPA, RICE & TACO'],
      ['SPECIAL LUNCH #11', '9.10', 'ONE FLAUTA, LETTUCE, SOUR CREAM, GUACAMOLE, & PICO DE GALLO'],
      ['SPECIAL LUNCH #12', '9.95', 'ONE FLAUTA, RICE & BEANS'],
      ['SPECIAL LUNCH #13', '9.10', 'ONE TAMALE, RICE & BEANS'],
      ['SPECIAL LUNCH #14', '9.95', 'ONE CHILE RELLENO, RICE & BEANS'],
      ['SPECIAL LUNCH #15', '10.45', 'ONE STUFFED QUESADILLA WITH RICE & BEANS']
    ]
  },
  {
    title: 'A La Carte',
    items: [
      ['ORDER OF BEANS', '3.00'], ['ORDER OF RICE', '3.00'],
      ['ORDER OF TACOS (3)', '10.25', 'BEEF, BEAN, PORK, OR CHICKEN'],
      ['ORDER OF TAMALES (3)', '11.00', 'BEEF, CHICKEN, PORK OR CHEESE'],
      ['ORDER OF ENCHILADAS (3)', '11.00', 'BEEF, BEAN, CHICKEN, PORK, OR CHEESE'],
      ['ORDER OF BEEF TOSTADAS (2)', '11.00'], ['ORDER OF BURRITOS (2)', '11.00'],
      ['ORDER OF CHALUPAS (2)', '11.00'], ['ORDER OF CHILE RELLENOS (2)', '11.00'],
      ['ORDER OF TOSTAGUACS (2)', '13.75'], ['ONE CHIMICHANGA WITH CHEESE SAUCE', '9.50'],
      ['ONE FLAUTA', '4.75'], ['ORD. OF CHICKEN, GROUND BEEF OR PORK', '3.50'],
      ['ORDER OF FISH TACOS (3)', '14.50', 'PAN SEARED TILAPIA WITH COLE SLAW IN A FLOUR TORTILLA'],
      ['ONE FISH TACO', '5.50']
    ]
  },
  {
    title: 'Side Orders',
    items: [
      ['SMALL SIDE', '1.00'], ['LARGE SIDE', '1.75'], ['ORDER OF FRENCH FRIES', '3.25'],
      ['ORDER OF LETTUCE', '2.00'], ['ORDER OF FLOUR TORTILLAS (2)', '2.00'],
      ['ORDER OF CORN TORTILLAS (4)', '2.00'], ['SINGLE BURRITO', '7.25', 'BEEF, BEAN, CHICKEN, PORK OR CHEESE'],
      ['CHALUPA', '7.25'], ['CHILE RELLENO', '7.25', 'BEEF, BEAN, CHICKEN, CHEESE OR PORK'],
      ['SINGLE ENCHILADA', '4.25', 'BEEF, BEAN, CHICKEN, CHEESE OR PORK'], ['SINGLE TACO', '3.40', 'BEEF, BEAN, CHICKEN OR PORK'],
      ['SINGLE TAMALE', '4.25', 'BEEF, CHICKEN, CHEESE OR PORK'], ['BEEF TOSTADA', '7.25'], ['TOSTAGUAC', '9.00'],
      ['SMALL SOUR CREAM (3oz.)', '1.00'], ['SMALL GUACAMOLE DIP (3oz.)', '3.75'], ['SMALL CHEESE DIP (3oz.)', '3.75'],
      ['SMALL ORDER MUSHROOMS/SPINACH', '2.75'], ['GRILLED ONIONS', '1.75'], ['GRILLED CERRANO PEPPERS', '1.75'],
      ['SAUTEED BELL PEPPERS & ONIONS', '3.50'], ['SLICED AVOCADO', '3.25']
    ]
  },
  {
    title: 'Child\'s Plate',
    items: [['#1','6.50','ONE TACO, RICE & BEANS'],['#2','6.50','ONE TACO, ONE ENCHILADA & RICE'],['#3','6.50','ONE QUESADILLA, RICE & BEANS'],['#4','6.50','ONE BURRITO & RICE'],['#5','6.50','ONE ENCHILADA, RICE AND BEANS'],['#6','6.50','ONE QUESADILLA, ONE TACO & RICE'],['#7','6.50','POLLO AZADO & FRENCH FRIES OR RICE'],['#8','6.50','QUESADILLA & FRENCH FRIES']]
  },
  {
    title: 'Dessert',
    items: [['SOAPAPILLA','3.50'],['SOAPAPILLA A LA MODE','5.25'],['FRIED ICE CREAM','5.25'],['FLAN','5.25','MEXICAN CARAMEL CUSTARD'],['SCOOP OF ICE CREAM','3.00']]
  },
  {
    title: 'Soft Drinks',
    items: [['SOFT DRINKS','3.25','COKE, CHERRY COKE, DIET COKE, MR. PIBB, SPRITE, LEMONADE, ICED TEA'],['MILK, COFFEE, GREEN TEA','3.25'],['SHIRLEY TEMPLE','3.25'],['MILKSHAKE','3.85','VANILLA'],['AGUA DE HORCHATA','3.35','SWEET RICE WATER']]
  }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderMenu(){
  const root=document.querySelector('[data-menu]');
  if(!root)return;
  const columns=[document.createElement('div'),document.createElement('div'),document.createElement('div')];
  columns.forEach(column=>{column.className='menu-column';root.append(column)});
  MENU.forEach((section,index)=>{
    const block=document.createElement('section');
    block.className='menu-block';
    block.innerHTML=`<h2>${escapeHtml(section.title)}</h2><ul class="menu-list"></ul>`;
    const list=block.querySelector('.menu-list');
    section.items.forEach(([name,price,desc])=>{
      const item=document.createElement('li');
      item.className='menu-item';
      item.innerHTML=`<span class="menu-name">${escapeHtml(name)}</span><span class="menu-price">${escapeHtml(price)}</span>${desc?`<small class="menu-desc">${escapeHtml(desc)}</small>`:''}`;
      list.append(item);
    });
    columns[index%3].append(block);
  });
}

document.addEventListener('DOMContentLoaded',renderMenu);
