const math = require('./math');

jest.mock('./math');

describe('Exercicio de fixação', () => {
  test('Faça o mock da funcão subtrair e teste sua chamada', () => {
    math.subtrair(1, 2);
  
    expect(math.subtrair).toBeCalled();
  });
  
  test('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
  
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
  })

  test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar.mockResolvedValue();
    
    expect(math.somar(2, 3)).resolves.toBe(5);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(2, 3)
  })

  test('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2"e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
    math.dividir = jest.fn().mockReturnValue(15);

    expect(math.dividir(2, 5)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir(2, 5)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
  })

  test('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.',() => {
    math.subtrair = jest.fn().mockReturnValue(20);

    expect(math.subtrair(30, 10)).toBe(20);
    expect(math.subtrair).toHaveBeenCalledTimes(1);

    math.subtrair.mockReset();
    expect(math.subtrair(30,10)).toBe(undefined);
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(30,10);

  })
})
