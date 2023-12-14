const list = document.querySelector('#categories');
const childList = list.children;
console.log(`Number of categories: ${childList.length}`);

[...childList].forEach(category => {
    const categoryHeader = category.querySelector('h2');
    const categoryElements = category.querySelectorAll('li');

    console.log(`Category: ${categoryHeader.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
});
