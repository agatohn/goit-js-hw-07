const incrRef = document.querySelector('[data-action="increment"]');
const decrRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
let counter = 0;

valueRef.textContent = counter;

incrRef.addEventListener('click', increment);
 function increment() {
   counter += 1;
  valueRef.textContent = counter;
 }

decrRef.addEventListener('click', decrement);

 function decrement() {
   counter -= 1;
  valueRef.textContent = counter;
 }