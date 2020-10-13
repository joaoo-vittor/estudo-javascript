// Aula 1

function checkUsername() {
  const elMsg = document.getElementById('feedback');
  const elUsername = document.getElementById('username');
  if (elUsername.nodeValue.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}
