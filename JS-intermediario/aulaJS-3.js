// Aula 3

// Avaliação de Curto-Circuito (Short-Circuito)

/*

  Valores falsy (valores avaliados em false)
  -> 0
  -> false
  -> ''
  -> ""
  -> ``
  -> null / undefined
  -> NaN

*/

console.log('joao' && true && 'silva');
console.log('joao' && 0 && 'silva');
console.log('jose' && undefined && 'maria');

console.log('jose' || 'maria');

