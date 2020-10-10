// aula3

/*
-> Operadores Lógicos

    SIGNIFICADO             VALOR
    E lógico                &&
    OU lógico               ||
    NÃO lógico              !

*/

let score1 = 8;
let score2 = 8;
let pass1 = 5;
let pass2 = 7;

const passBoth = (score1 >= pass1) && (score2 >= pass2);

let msg = 'Both rounds passed: ' + passBoth;

const el = document.querySelector('.level');
el.textContent = msg;

