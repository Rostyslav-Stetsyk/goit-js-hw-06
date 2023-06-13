const itemOfCategoriesEl = document .querySelectorAll('#categories .item');

const countCategories = itemOfCategoriesEl.length;
console.log(`Number of categories: ${countCategories}`);

itemOfCategoriesEl.forEach(li => {
    const title = li.querySelector('h2').textContent
    const countElement = li.querySelectorAll('li').length
    console.log(`Category: ${title}\nElements: ${countElement}`)
});
