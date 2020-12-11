// Aula 3

// Async / Await

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


// espera('Fase 1', rand(0, 3))
//   .then(resp => {
//     console.log(resp);
//     return espera('Fase 2', rand(0, 3));
//   })
//   .then(resp => {
//     console.log(resp);
//     return espera('Fase 3', rand(0, 3));
//   })
//   .then(resp => {
//     console.log(resp);
//     return resp;
//   })
//   .then(resp => {
//     console.log('Terminamos na Fase: ', resp);
//   })
//   .catch(resp => {
//     console.log(resp);
//   })


async function executa() {
  try {
    // const fase1 = await espera('Fase 1', rand(0, 3));
    const fase1 = espera('Fase 1', rand(0, 3)); // Promise { <pending> }
    console.log(fase1);

    const fase2 = await espera('Fase 2', rand(0, 3));
    console.log(fase2);

    const fase3 = await espera('Fase 3', rand(0, 3));
    console.log(fase3);

    console.log('Terminamos na Fase: ', fase3);
  } catch (err) {
    console.log(err);
  }
}
// executa();

const test = espera('teste', 4000);
console.log(test);

/*

Estados da Promises:

-> pending => Pendente
-> fullFilled => Resolvida
-> rejected => Rejeitada

*/

