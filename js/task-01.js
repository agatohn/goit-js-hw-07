const categoriesInList = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesInList.length} категории.`);

categoriesInList.forEach(item =>
    console.log(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length} `),
);