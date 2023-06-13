const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const ingredientsList = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  return liEl;
})

ingredientsEl.append(...ingredientsList);