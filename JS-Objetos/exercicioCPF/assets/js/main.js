(function () {

  const inputCPF = document.querySelector('.num-cpf');
  const btnVerifCPF = document.querySelector('.btn');
  const resultado = document.querySelector('.resultado');

  function VerificaCPF(valorCPF) {
    Object.defineProperty(this, 'valorCPF', {
      enumerable: true,
      configurable: false,
      get: function () {
        return valorCPF.replace(/\D+/g, '');
      }
    });
  }

  VerificaCPF.prototype.verificaCpf = function () {
    const cpf = this.valorCPF;

    let auxPrimDigit = cpf.slice(0, -2);
    let auxCont = 0;
    let indiceAux = 0;
    let acum = 0;
    let digito = 0;

    // 705.484.450-52 70548445052 07098772003
    for (let i = 0; i < 2; i++) {
      for (let j = (cpf.length - 1) + auxCont; j > 1 ; j--) {
        acum += Number(auxPrimDigit[indiceAux]) * j;
        indiceAux++;
      }
      digito = 11 - (acum % 11);

      if (digito > 9) {
        auxPrimDigit += '0';
      } else {
        auxPrimDigit += String(digito);
      }

      auxCont++;
      indiceAux = 0;
      acum = 0;
    }

    if (cpf === auxPrimDigit) {
      return true;
    }
    
    return false;
  }
  
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function mascarCPF(cpf) {
    const regE = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g;
    const auxCpf = cpf.replace(/\D+/g, '');
    const mascCpf = auxCpf.replace(regE, '$1.$2.$3-$4');
    return mascCpf
  }

  function mostraResult(bool) {
    const pResult = resultado.querySelector('p');
    const auxCpf = mascarCPF(inputCPF.value);
    
    if (bool) {
      pResult.innerText = `O CPF: ${auxCpf} é valido!`;
      return;
    }
    pResult.innerText = `O CPF: ${auxCpf} é invalido!`;
  }
  
  btnVerifCPF.addEventListener('click', function (event) {
    if (!inputCPF.value) {
      return;
    }

    const pResult = resultado.querySelector('p');

    let aux = inputCPF.value;
    aux = aux.replace(/\D+/g, '');
    if (aux.length < 11 || aux.length > 14) {
      pResult.innerText = `${inputCPF.value} é um valor invalido!`;
      return;
    }
    
    if (!isNumber(aux)) {
      pResult.innerText = `${inputCPF.value} é um valor invalido!`;
      return;
    }

    pResult.innerText = '';

    const cpf = new VerificaCPF(aux);
    const vrfCpf = cpf.verificaCpf();

    mostraResult(vrfCpf);
  });

})();