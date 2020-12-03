// Aula 20
(function () {

  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  // form.onsubmit = function (event) {
  //   event.preventDefault();
  // };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.querySelector('#nome');
    const sobrenome = form.querySelector('#sobrenome');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    console.log(pessoas);
  });



}());
