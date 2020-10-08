// aula2

// declaração de variaveis
let today = new Date()
let hourNow = today.getHours()
let greetings


console.log(hourNow)

// estrutura condicional
if (hourNow > 18) {
  greetings = 'Good evening!'
} else if (hourNow > 12 ) {
  greetings = 'Good afternoon!'
} else if (hourNow > 0) {
  greetings = 'Good morning!'
} else {
  greetings = 'Welcome!'
}

console.log(greetings)

