// Aula 9

const itemtwo = document.getElementById('two');

let elText = itemtwo.firstChild.nodeValue;

console.log(elText);

elText = elText.replace('pine nuts', 'kale');

itemtwo.firstChild.nodeValue = elText;

