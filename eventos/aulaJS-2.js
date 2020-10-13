// Aula 2

// Declaração da função.
function checkUsername() {
  // Obtem o elemento de com a class feedback.
  const elMsg = document.getElementById('feedback');
  
  // verifica se o elemento tem menos de 5 caracteres.
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 character or more';
  } else {
    elMsg.textContent = '';
  }
}

// Obtem o elemento com o id username.
const elUsername = document.getElementById('username');

// Adiciona o evento onblur no elemento.
elUsername.onblur = checkUsername;
