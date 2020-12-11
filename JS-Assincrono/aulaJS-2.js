// Aula 2

// Metodos uteis para Promises

// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function rand(max, min) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}


function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('CAI NO ERRO!');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise.');
      return;
    }, tempo);
  })
}


const promises = [
  // 'primeiro valor',
  espera('Promise 1', rand(1, 5)),
  espera('Promise 2', rand(1, 5)),
  espera('Promise 3', rand(1, 5)),
  // espera(1000, 1000),
  // 'outro valor'
];


// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((valor) => {
//     console.log(valor);
//   });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve('Pagina em Cache');
  } else {
    return espera('Baixei a pagina', 3000);
  }
}

baixaPagina()
  .then(dadosPag => {
    console.log(dadosPag);
  })
  .catch(dadosPag => {
    console.log('ERRO: ' + dadosPag);
  })



