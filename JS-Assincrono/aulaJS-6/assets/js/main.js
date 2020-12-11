// aula 6

// Fetch API e Axios (JSON)


// fetch('pessoas.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     carregaDadoPagina(json);
//   })
//   .catch(error => {
//     console.log(error);
//   })


axios('pessoas.json')
  .then(respose => {
    carregaDadoPagina(respose.data);
  })


function carregaDadoPagina(json) {
  const table = document.createElement('table');

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    // td = document.createElement('td');
    // td.innerHTML = pessoa.salario;
    // tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);

}

