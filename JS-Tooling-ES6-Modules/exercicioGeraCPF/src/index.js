import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = '000.000.000-00';

  document.addEventListener('click', event => {
    event.preventDefault();
    const btn = event.target;

    if (btn.classList.contains('btn-gerar')) {
      const gera = new GeraCPF();
      cpfGerado.innerHTML = gera.geraNovoCpf();
    }
  });

})();
