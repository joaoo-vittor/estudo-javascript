(function () {


  const form = document.querySelector('#form-calc');


  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // const peso = form.querySelector('#peso');
    const peso = event.target.querySelector('#peso');
    const altura = form.querySelector('#altura');

    let auxpeso = parseFloat(peso.value);
    let auxaltura = parseFloat(altura.value);

    const imc = calcIMC(auxpeso, auxaltura);
    const result = verificaIMC(imc);

    mostraIMC(imc, result);

  })


  function calcIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }


  function verificaIMC(imc) {
    if (isNaN(imc)) {
      return NaN
    }

    if (imc < 18.5) {
      return 'Abaixo do peso';
    }

    if (imc > 18.5 && imc < 24.9) {
      return 'Peso normal';
    }

    if (imc > 25 && imc < 29.9) {
      return 'Sobrepeso';
    }

    if (imc > 30 && imc < 34.9) {
      return 'Obesidade grau 1';
    }

    if (imc > 35 && imc < 39.9) {
      return 'Obesidade grau 2';
    }

    return 'Obesidade grau 3';
  }


  function mostraIMC(imc, result) {
    const resultIMC = document.querySelector('.result');

    if (isNaN(imc) && isNaN(result)) {
      resultIMC.innerHTML = `<p>Valor Invalido!!!</p>`;
      resultIMC.style.backgroundColor = 'red';
      resultIMC.style.color = 'white';
    } else {
      let auxImc = imc.toFixed(2);
      resultIMC.innerHTML = `<p>Seu IMC é ${auxImc} (${result})</p>`;
      resultIMC.style.backgroundColor = '#ffcf75';
      resultIMC.style.color = '#000';
    }

    resultIMC.style.display = 'block';
  }


}())
