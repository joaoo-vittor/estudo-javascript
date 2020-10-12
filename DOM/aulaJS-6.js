// Aula 6

const hotItems = document.querySelectorAll('li.hot');

for (let i = 0; i < hotItems.length; i++) {
  hotItems[i].className = 'cool';
}

