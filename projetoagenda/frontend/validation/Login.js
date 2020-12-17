import validator from 'validator';

export default class Login {
  constructor(formCadastro, tipoInput) {
    this.form = document.querySelector(formCadastro);
    this.tipoInput = tipoInput;
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) {
      return;
    }

    document.addEventListener('submit', event => {
      event.preventDefault();
      const valid = this.validation(event);
      if(!valid) {
        this.form.submit();
      }
    });
  }

  validation(event) {
    const element = event.target;
    const emailInput = element.querySelector(this.tipoInput+'-email');
    const passwordInput = element.querySelector(this.tipoInput+'-senha');
    let erro = false;

    this.inputValid();

    if(!emailInput && !passwordInput) {
      erro = true;
      return erro;
    }

    if(!validator.isEmail(emailInput.value)) {
      this.mostraErro(emailInput, 'E-mail invalido!');
      erro = true;
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length >= 50) {
      this.mostraErro(passwordInput, 'Sua senha deve ter de 3 a 50 caracteres!');
      erro = true;
    }

    return erro;
  }

  mostraErro(element, msg) {
    const div = document.createElement('div');
    div.innerText = msg;
    div.classList.add('msg-error');

    element.insertAdjacentElement('afterend', div);
  }

  inputValid() {

    if(!this.form.querySelectorAll('.msg-error')) {
      console.log('aqui');
      return;
    }
    for(let inputErro of this.form.querySelectorAll('.msg-error')) {
      inputErro.remove();
    }
  }

}
