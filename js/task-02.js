const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemEl = document.createElement('li');
navLinkEl.classList.add('item');

const navLinkEl = document.createElement('a');
navLinkEl.textContent = 'Potatoes';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('ingredients');

navEl.appendChild(navItemEl);