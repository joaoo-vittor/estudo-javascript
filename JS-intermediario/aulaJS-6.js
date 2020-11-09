// Aula 6

// Objeto Date

// const data = new Date(2020, 8); // Ano, Mes, Dia, Hora, Minuto, segundo, Milessimo

/*
const data = new Date('2020-11-08 23:58:34');


console.log(data.toString());
console.log('Dia:', data.getDate());
console.log('Mes:', data.getMonth());
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Min:', data.getMinutes());
console.log('Seg:', data.getSeconds());
console.log('Ms:', data.getMilliseconds());
console.log('Dia Semana:', data.getDay()); // 0 - Domingo | 6 - Sabado


// milessimos desde a da base 01/01/1970
console.log(Date.now());

*/

const data = new Date();

function zeroesquerda(num) {
  return num < 10 ? `0${num}` : num;
}

function formatadata(data) {
  const dia = zeroesquerda(data.getDate());
  const mes = zeroesquerda(data.getMonth() + 1);
  const ano = zeroesquerda(data.getFullYear());
  const hora = zeroesquerda(data.getHours());
  const min = zeroesquerda(data.getMinutes());
  const seg = zeroesquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}

const dataBrazil = formatadata(data);
console.log(dataBrazil);

