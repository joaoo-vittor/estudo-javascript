const { texto, arquivos } = require('./texto');

// qunatificadores
// *  -> (Opcional) 0 ou n vezes {0,}
// +  -> (Obrigatorio) 1 ou n vezes {1,}
// ?  -> (Opcional) 0 ou 1 veze {0, 1}
// \ caractere de escape
// {qtdVezes, MaxVezes}

// console.log(texto);
// const regExp = /jo+ao+/gi;
// console.log(texto.match(regExp));

const regExp = /\.(jp|JP)(e|E)?(g|G)/gi;

for (let arquivo of arquivos) {
  const valido = arquivo.match(regExp);

  if(!valido) continue;
  console.log(arquivo, valido);
}



