// aula1

/*
-> Operadores de compareção

    SIGNIFICADO                        VALOR
    Igual a                             ==
    Diferente de                        !=
    Estritamente igual a                ===
    Estritamente diferente de           !==
    Maior que                           >
    Menor que                           <
    Maior ou igual a                    >=
    Menor ou igual a                    <=

*/

let pass = 50;
let score = 90;

let hasPassed = score >= pass;

const el = document.querySelector('.level');
el.textContent = 'Level passed: ' + hasPassed;

