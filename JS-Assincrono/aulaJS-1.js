// Aula 1

// Promises

function numAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}


function esperar(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      // reject('BAD VALUE');
      reject(new Error('ERROR'));
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}


esperar('Conexão com o BD', numAleatorio(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperar(12321321, numAleatorio(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperar('Tratando os dados', numAleatorio(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(erro => {
    console.log('ERROR: ', erro);
  });


// Arvore de Natal
// esperar('frase 1', numAleatorio(1, 3), function () {
//   esperar('frase 2', numAleatorio(1, 3), function () {
//     esperar('frase 3', numAleatorio(1, 3));
//   });
// });









