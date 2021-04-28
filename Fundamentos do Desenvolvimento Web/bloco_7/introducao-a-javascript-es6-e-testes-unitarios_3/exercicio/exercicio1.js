const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4,5);
const expected1 = sum(0,0);
// const expected2 = sum(4,'5');

assert.strictEqual(expected, 9);
assert.strictEqual(expected1, 0);
// assert.strictEqual(expected2, 9); 
assert.throws(() => {
    sum(4, 5);
  }, /^Error: parameters must be numbers$/);

