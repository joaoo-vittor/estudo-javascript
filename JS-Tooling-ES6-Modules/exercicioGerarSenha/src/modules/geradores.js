const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const geraMaiuscula = () => {
  return String.fromCharCode(rand(65, 91));
}

const geraMinuscula = () => {
  return String.fromCharCode(rand(97, 122));
}

const geraNumero = () => {
  return String.fromCharCode(rand(48, 57));
}

const geraSimbolos = () => {
  const simb = '!@#$%&*()_-+;.,[]{}';
  return simb[rand(0, simb.length)];
}

export default function geraSenha(qtd, maiusc, minusc, nums, simbs) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusc && senhaArray.push(geraMaiuscula());
    minusc && senhaArray.push(geraMinuscula());
    nums && senhaArray.push(geraNumero());
    simbs && senhaArray.push(geraSimbolos());
  }

  return senhaArray.join('').slice(0, qtd);
}
