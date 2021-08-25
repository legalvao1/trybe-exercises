const readline = require('readline-sync');

const name = readline.question('Qual seu nome? '); // interpreta a resposta como uma string comum
const age = readline.questionInt('Qual sua idade? '); // converte a resposta para número (parseInt) erro caso num não válido

console.log(`Hello, ${name}! You are ${age} years old!`);