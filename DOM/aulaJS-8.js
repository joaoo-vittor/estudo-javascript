// Aula 8

const startItem = document.getElementsByTagName('ul')[0];
const firstItem = startItem.firstChild;
const lastItem = startItem.lastChild;

console.log(startItem);
console.log(firstItem);
console.log(lastItem);

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');
