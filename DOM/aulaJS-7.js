// Aula 7

let startItem = document.getElementById('two');
let prevItem = startItem.previousSibling;
let nextItem = startItem.nextSibling;

console.log(prevItem);
console.log(nextItem);

prevItem.className = 'complete'; 
