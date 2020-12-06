// Aula 8

// try {
//   // É execultado quando não há erros
// } catch (e) {
//   // É execultado quando há erros
// } finally {
//   // Sempre
// }


function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:15');
  const hora = retornaHora(11);
  console.log(hora);
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally: Sempre será executado.');
}
