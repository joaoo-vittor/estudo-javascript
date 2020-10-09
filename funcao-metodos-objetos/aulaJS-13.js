// aula13

let today = new Date();
let year = today.getFullYear();
let est = new Date('Apr 16, 1998 15:45:55');
let difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

let elMsg = document.querySelector('.info');
elMsg.textContent = Math.floor(difference) + ' years!!!';
