const readline = require('readline-sync');

const numero = readline.questionInt('Digite um numero para saber seu fatorial: ')

const fatorial = (numero) => {
  if (numero === 0) {
    return 1
  }
  let resultado = numero;
  for (let i = numero -1 ; i > 1;  i -= 1) {
    resultado *= i
  }
  return resultado;
}

console.log(fatorial(numero));

