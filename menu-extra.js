/*
 * Additional menu sections carried over from the original site.
 * Keep normal menu edits centralized in menu.js; this file holds the
 * larger legacy sections so the core renderer stays easy to maintain.
 * Fajita-specific entries are intentionally not copied into the test site.
 */
const ADDITIONAL_MENU = [
  {
    title: 'Lunch or Dinner Specialties',
    items: [
      { name: 'TACO DE POLLO OR CARNE AZADA', price: '8.50' },
      { name: 'CHORIZO AND EGG CHILAQUILES', price: '10.75' },
      { name: 'HUEVOS MEXICANOS', price: '9.25' },
      { name: 'HUEVOS RANCHEROS', price: '9.25' },
      { name: 'HUEVOS REVUELTOS CON CHORIZO', price: '10.75' },
      { name: 'CHILAQUILES CON POLLO', price: '10.75' }
    ]
  },
  {
    title: 'El Torero Style Dinners',
    items: [
      { name: 'SPECIAL DINNER', price: '18.95' },
      { name: 'SPECIAL COMBO', price: '18.25' },
      { name: 'FLAUTAS', price: '16.50' },
      { name: 'SINGLE FLAUTA', price: '8.50' },
      { name: 'CHIMICHANGAS', price: '17.80' },
      { name: 'SINGLE CHIMICHANGA', price: '11.00' },
      { name: 'CHILE RANCHERO', price: '19.25' },
      { name: 'MEXICAN STEW', price: '19.25' },
      { name: 'CARNE AZADA', price: '19.25' },
      { name: 'BISTEC RANCHERO', price: '27.25' },
      { name: 'BISTEC & PEPPERS', price: '27.25' },
      { name: 'CARNE DE PUERCO', price: '19.25' },
      { name: 'EL DIABLO (VERY HOT) OR A LA DIABLA (EXTREMELY HOT)', price: '17.25' },
      { name: 'EL DIABLO MIXED (VERY HOT) OR A LA DIABLA MIXED (EXTREMELY HOT)', price: '19.25' },
      { name: 'EL GRANDE (HAND HELD BURRITO)', price: '12.50' },
      { name: 'PAN SEARED FISH', price: '18.25' },
      { name: 'PAN SEARED CHICKEN', price: '18.25' },
      { name: 'NACHOS "NO CHIPS"', price: '14.50' },
      { name: 'NACHOS "NO CHIPS" MIXED', price: '18.75' },
      { name: 'POLLO LOCO', price: '19.25' },
      { name: 'POLLO LOCO MIXED', price: '18.25' },
      { name: 'CHORI POLLO', price: '19.75' },
      { name: 'POLLO SERRANO', price: '19.25' }
    ]
  },
  {
    title: 'El Torero Special Orders',
    items: [
      { name: 'SPECIAL ORDER A', price: '14.50' },
      { name: 'SINGLE SPECIAL A', price: '7.75' },
      { name: 'SPECIAL ORDER B', price: '14.50' },
      { name: 'SINGLE SPECIAL B', price: '7.75' },
      { name: 'SPECIAL ORDER C', price: '14.50' },
      { name: 'SINGLE SPECIAL C', price: '7.75' },
      { name: 'SPECIAL ORDER D', price: '13.00' },
      { name: 'SINGLE SPECIAL D', price: '7.75' },
      { name: 'SPECIAL ORDER E', price: '14.50' },
      { name: 'SINGLE SPECIAL E', price: '7.75' },
      { name: 'SPECIAL ORDER F', price: '15.75' },
      { name: 'SEPCIAL ORDER ABC', price: '17.25' },
      { name: 'SINGLE SPECIAL ABC', price: '8.75' },
      { name: 'SPECIAL ORDER G', price: '16.50' },
      { name: 'SINGLE SPECIAL G', price: '5.25' },
      { name: 'TACOS DE CARNE AZADA', price: '15.25' },
      { name: 'SINGLE TACO DE CARNE AZADA', price: '4.00' },
      { name: 'BURRITOS DE CARNE OR POLLO AZADO', price: '15.25' },
      { name: 'SINGLE AZADA BURRITO', price: '8.75' }
    ]
  },
  {
    title: 'Combination Dinners',
    items: [
      { name: '#1', price: '14.75' }, { name: '#2', price: '14.75' },
      { name: '#3', price: '14.75' }, { name: '#4', price: '14.75' },
      { name: '#5', price: '14.75' }, { name: '#6', price: '14.75' },
      { name: '#7', price: '14.75' }, { name: '#8', price: '14.75' },
      { name: '#9', price: '13.00' }, { name: '#10', price: '14.75' },
      { name: '#11', price: '14.75' }, { name: '#12', price: '14.75' },
      { name: '#13', price: '14.75' }, { name: '#14', price: '14.75' },
      { name: '#15', price: '14.75' }, { name: '#16', price: '14.75' },
      { name: '#17', price: '15.40' }, { name: '#18', price: '15.40' },
      { name: '#19', price: '15.40' }, { name: '#20', price: '15.40' },
      { name: '#21', price: '15.40' }, { name: '#22', price: '15.40' },
      { name: '#23', price: '15.40' }, { name: '#24', price: '15.40' },
      { name: '#25', price: '15.40' }, { name: '#26', price: '15.40' },
      { name: '#27', price: '15.40' }, { name: '#28', price: '15.40' },
      { name: '#29', price: '15.40' }, { name: '#30', price: '16.75' },
      { name: '#31', price: '15.65' }, { name: '#32', price: '15.65' },
      { name: '#33', price: '15.65' }, { name: '#34', price: '15.65' },
      { name: '#35', price: '15.65' }, { name: '#36', price: '15.65' },
      { name: '#37', price: '15.65' }, { name: '#38', price: '16.75' },
      { name: '#39', price: '15.65' }, { name: '#40', price: '15.65' },
      { name: '#41', price: '17.75' }, { name: '#42', price: '15.65' },
      { name: '#43', price: '15.65' }, { name: '#44', price: '15.65' },
      { name: '#45', price: '15.65' }, { name: '#46', price: '15.65' },
      { name: '#47', price: '15.65' }, { name: '#48', price: '15.65' }
    ]
  }
];

MENU.push(...ADDITIONAL_MENU);
