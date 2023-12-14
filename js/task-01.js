const list = document.querySelector('#categories');
const childeList = list.children;
console.log(`Number of categories: ${childeList.length}`);

const animals = list.querySelector('h2');
console.log(`Category: ${animals.textContent}`);
const elementAnimal = childeList[0].querySelectorAll('li');
console.log(`Elements: ${elementAnimal.length}`);

const product = list.querySelectorAll('#categories>li>h2')
console.log(`Category: ${product[1].textContent}`);
const elementProduct = childeList[1].querySelectorAll('li')
console.log(`Elements: ${elementProduct.length}`);

const technologies = list.querySelectorAll('#categories>li>h2')
console.log(`Category: ${technologies[2].textContent}`);
const elementTechnologies = childeList[2].querySelectorAll('li')
console.log(`Elements: ${elementTechnologies.length}`);