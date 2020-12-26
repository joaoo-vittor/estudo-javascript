// Greedy e non-greedy (lazy)

const { html } = require('./texto');

const regEx = /(<.+>.+<\/.+>)/gi; // greedy
const regEx2 = /(<.+?>.+?<\/.+?>)/gi; // non-greedy

console.log(html);
console.log('greedy' ,html.match(regEx));
console.log('non-greedy' ,html.match(regEx2));
