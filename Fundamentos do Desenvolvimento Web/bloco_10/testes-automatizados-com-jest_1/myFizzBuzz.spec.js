const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 4 - Função myFizzBuzz', () => {
  test('Retorno fizzbuzz caso numero divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('Retorno fizz caso numero divisivel por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  test('Retorno buzz caso numero divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  test('Retorno numero caso numero não seja divisivel por 3 e 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })
  test('Retorno false caso parametro não seja um numero', () => {
    expect(myFizzBuzz('12')).toBe(false);
  })
})