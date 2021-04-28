const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(9),'fizz'); //divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10),'buzz'); //divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(345), 'fizzbuzz') //divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(8), 8);
assert.strictEqual(myFizzBuzz('mariposa'), false)