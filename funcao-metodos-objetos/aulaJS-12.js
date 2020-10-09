// aula12

let today = new Date();
let year = today.getFullYear();

let el = document.querySelector('.info');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
