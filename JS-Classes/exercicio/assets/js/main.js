class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', event => {
      this.handleSubmit(event);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const validInputs = this.isValidInputs();
    const passwordValid = this.passwordsValids();

    if (validInputs && passwordValid) {
      alert('Formulario enviado!');
      this.formulario.submit();
    }

  }

  passwordsValids() {
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repSenha = this.formulario.querySelector('.repetir-senha');

    if (senha.value !== repSenha.value) {
      this.createError(senha, 'Campo "Senha" e "Repetir Senha" precisam ser iguais!');
      this.createError(repSenha, 'Campo "Senha" e "Repetir Senha" precisam ser iguais!');
      valid = false;
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.createError(senha, 'Campo "Senha" precisa estar entre 6 e 12 caracteres!');
      valid = false;
    }

    return valid;
  }

  isValidInputs() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let inputValue of this.formulario.querySelectorAll('.validar')) {
      const label = inputValue.previousElementSibling.innerText;
      if (!inputValue.value) {
        this.createError(inputValue, `Campo "${label}" não pode ficar em branco!`);
        valid = true;
      }

      if (inputValue.classList.contains('cpf')) {
        if(!this.validCPF(inputValue)) valid = false;
      }

      if (inputValue.classList.contains('usuario')) {
        if(!this.validUsuario(inputValue)) valid = false;
      }
    }

    return valid;
  }

  validUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.createError(campo, 'Usuario precisa ter entre 3 e 12 caracteres!');
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo, 'Usuario precisa so pode ter letras e/ou numeros!');
      valid = false;
    }

    return true;
  }

  validCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.createError(campo, 'CPF invalido!');
      return false;
    }

    return true;
  }

  createError(campo, msg) {
    const div = document.createElement('div');

    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);


  }

}

const valida = new ValidaFormulario();
