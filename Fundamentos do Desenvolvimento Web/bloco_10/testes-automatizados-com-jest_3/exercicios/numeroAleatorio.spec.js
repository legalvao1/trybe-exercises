const numeroAleatorio = require('./numeroAleatorio');

jest.mock('./numeroAleatorio');

describe('Função que gera um numero aleatorio entre 0 e 100', () => {
  test('defina o retorno padrão como 10.', () => {
      numeroAleatorio.randomNumber = jest.fn().mockReturnValue(10);

      expect(numeroAleatorio.randomNumber()).toBe(10);
      expect(numeroAleatorio.randomNumber).toHaveBeenCalled();
      expect(numeroAleatorio.randomNumber).toHaveBeenCalledTimes(1)
  })
  test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    numeroAleatorio.randomNumber = jest.fn().mockImplementationOnce((n1, n2) => n1 / n2)

    expect(numeroAleatorio.randomNumber(10, 2)).toBe(5);
  })

  test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
    numeroAleatorio.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(numeroAleatorio.randomNumber(1, 2, 3)).toBe(6);
    expect(numeroAleatorio.randomNumber).toHaveBeenCalled();
    expect(numeroAleatorio.randomNumber).toHaveBeenCalledTimes(1);

    numeroAleatorio.randomNumber.mockReset();
    numeroAleatorio.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(numeroAleatorio.randomNumber(2)).toBe(4);
    expect(numeroAleatorio.randomNumber).toHaveBeenCalled();
    expect(numeroAleatorio.randomNumber).toHaveBeenCalledTimes(1);
  })
})