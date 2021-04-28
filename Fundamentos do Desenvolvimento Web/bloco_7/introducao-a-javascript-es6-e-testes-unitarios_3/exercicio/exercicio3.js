const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

// myRemoveWithoutCopy(array, 1); // removo um parametro
// assert.strictEqual(array.length, 3); // verifico se o tamanho do array original mudou, no caso sim


assert.deepStrictEqual(myRemoveWithoutCopy(array, 5), array);
