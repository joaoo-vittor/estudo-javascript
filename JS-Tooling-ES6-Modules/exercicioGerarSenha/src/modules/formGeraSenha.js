import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracter = document.querySelector('.qtd-caracter');
const numeros = document.querySelector('.add-numeros');
const letrasMaiu = document.querySelector('.add-letra-maiu');
const letrasMinu = document.querySelector('.add-letra-min');
const simbolos = document.querySelector('.add-simbolo');
const btnGeraSenha = document.querySelector('.btn-gerar');

export default () => {
  btnGeraSenha.addEventListener('click', () => {
    gera();
  })
};

function gera() {
  const maiu = letrasMaiu.checked;
  const minu = letrasMinu.checked;
  const nums = numeros.checked;
  const simb = simbolos.checked;

  if (qtdCaracter.value > 0 && qtdCaracter.value <= 20 && (maiu || minu || nums || simb)) {
    const novaSenha = geraSenha(qtdCaracter.value, maiu, minu, nums, simb);
    senhaGerada.innerHTML = novaSenha;
    return;
  }

  (qtdCaracter.value <= 0 || qtdCaracter.value > 20) && (senhaGerada.innerHTML = 'Tamanho invalido');
  !(maiu || minu || nums || simb) && (senhaGerada.innerHTML = 'Selecione um campo');
}
