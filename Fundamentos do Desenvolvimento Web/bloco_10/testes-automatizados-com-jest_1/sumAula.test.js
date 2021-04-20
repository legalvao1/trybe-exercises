const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. Na prática, porém, eles ficarão separados

// sum.js
const sum = (a, b) => a + b;

module.exports = sum; // module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. 

// sum.test.js
const sum = require('./sum'); // require('./sum') para importar a função sum 

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

// arrays e objetos se usa toEqual

// test('array and object equality', () => {
//     const arr = [1, 2 ,3];
//     const obj = { a: 1, b: 2, c: 3};
  
//     expect(arr).toBe([1, 2, 3]); // fails
//     expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//     expect(arr).toEqual([1, 2, 3]); // OK
//     expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
//   });

// exceções

const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  //Note que para testar se um erro é lançado, passamos para o expect uma função. Chamamos multiplyByTwo dentro da arrow function . Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido") . Observe que nos dois casos a função que queremos testar é chamada indiretamente por uma arrow function . Seguir essa sintaxe é importante para que o seu teste funcione corretamente.

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});