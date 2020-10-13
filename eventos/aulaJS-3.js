// Aula 3

function checkUsername() {
  const elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}

const elUsername = document.getElementById('username');

// elemento.addEventListener('evento', nomeDaFunção, booleano);
//    |                         |             |           |
// elemento                  eventos        codigo    fluxo do evento

// fluxo do evento -> Indica algo que chamou a captura,
//                    e geramente é configurando como false.

elUsername.addEventListener('blur', checkUsername, false);
