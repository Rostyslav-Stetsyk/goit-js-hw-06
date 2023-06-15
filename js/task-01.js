const itemOfCategoriesEl = document .querySelectorAll('#categories .item');

const countCategories = itemOfCategoriesEl.length;
console.log(`Number of categories: ${countCategories}`);

itemOfCategoriesEl.forEach(li => {
    const title = li.firstElementChild.textContent;
    const countElement = li.lastElementChild.children.length;
    console.log(`Category: ${title}\nElements: ${countElement}`);
});
