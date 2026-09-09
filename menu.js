/* Single source of truth for editable menu content. Prices and descriptions live here. */
const MENU = {
  "Side Orders": [
    {name:"SMALL SIDE", price:"1.00"},
    {name:"LARGE SIDE", price:"1.75"},
    {name:"ORDER OF FRENCH FRIES", price:"3.25"}
  ]
};

function renderMenu(){
  const root=document.querySelector('[data-menu]');
  if(!root)return;
  root.innerHTML='';
  for(const [section,items] of Object.entries(MENU)){
    const block=document.createElement('section');
    block.className='menu-section';
    block.innerHTML=`<h2>${escapeHtml(section)}</h2><ul class="leaders"></ul>`;
    const list=block.querySelector('ul');
    for(const item of items){
      const li=document.createElement('li');
      li.innerHTML=`<span class="name">${escapeHtml(item.name)}</span><span class="price">${escapeHtml(item.price)}</span>`;
      list.appendChild(li);
    }
    root.appendChild(block);
  }
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.addEventListener('DOMContentLoaded',renderMenu);
