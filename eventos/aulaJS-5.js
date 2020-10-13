// Aula 5

const elUsername = document.getElementById('username');
const elMsg = document.getElementById('feedback');

function checkUsername(minlength) {
  if (elUsername.value.length < minlength) {
    elMsg.textContent = 'Username must be ' + minlength + ' characters or more.';
  } else {
    elMsg.textContent = '';
  }
}

// Verifica se o ouvinte de evento for suportado
if (elUsername.addEventListener) {
  elUsername.addEventListener('blur', function () {
    checkUsername(5);
  }, false);
} else {
  elUsername.attachEvent('blur', function () {
    checkUsername(5);
  })
}
