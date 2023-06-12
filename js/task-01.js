const elementOfCategories = document.querySelector('#categories').querySelectorAll('.item');

const countCategories = elementOfCategories.length;
console.log(`Number of categories: ${countCategories}`);

const textInTitle = elementOfCategories.forEach(li => {
    const title = li.querySelector('h2').textContent
    const countElement = li.querySelectorAll('li').length
    console.log(`Category: ${title}\nElements: ${countElement}`)
});
