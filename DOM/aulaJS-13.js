// Aula 13

const firstItem = document.getElementById('one');

// Verifica so o elemento tem um atributo de class
if (firstItem.hasAttribute('class')) {
  // Obtem o atributo de class
  const attr = firstItem.getAttribute('class');

  const el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}
