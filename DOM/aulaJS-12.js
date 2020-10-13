// Aula 12

// seleciona o elemento a ser removido.
const removeEl = document.getElementsByTagName('li')[3];

// seleciona o elemento pai.
const containerEl = removeEl.parentNode;

// remove o elemento.
containerEl.removeChild(removeEl);
