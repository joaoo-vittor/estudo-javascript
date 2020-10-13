
// Cria um novo elemento e o armazena em um variável.
const newEl = document.createElement('li');

// Cria um nó de texto e o armazena em uma variável.
const newText = document.createTextNode('quinoa');

// Anexa nós de texto ao novo elemento.
newEl.appendChild(newText);

// Localiza a posição onde o elemento deve ser adicionado.
const position = document.getElementsByTagName('ul')[0];

// Insere o novo elemento em sua posição.
position.appendChild(newEl);

