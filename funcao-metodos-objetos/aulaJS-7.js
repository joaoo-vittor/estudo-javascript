// aula7

// OBJECT MODEL

// Exibe a largura e altura da janela
let msg = '<h2>Browser window</h2><p>Width: ' + window.innerWidth + '</p>';
msg += '<p>Height: ' + window.innerHeight + '</p>';

msg += '<h2>History:</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>Screen:</h2><p>width: ' + window.screen.width + '</p>';

let el = document.querySelector('.info');
el.innerHTML = msg;

alert('Current page: ' + window.location);

