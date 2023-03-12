const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('.ingredients');

const elements = ingredients.map(option => {

const titleEl = document.createElement('li');
titleEl.classList.add('item');
titleEl.textContent = option;
return titleEl;
});
console.log(elements);
ingredientsEl.append(...elements);
