const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients')
const createLi = ingredients.map(ingr => {
const liRef = document.createElement('li');
   liRef.textContent = ingr;
   return liRef;
});
ulRef.append(...createLi);