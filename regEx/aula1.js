// Expreção regular

//     / <ExpressãoRegular> / <Flags>

// g -> Global
// i -> Case Insensitivi

const { texto } = require('./texto');

const regExp = /(joao)/i;

console.log(regExp.exec(texto));



