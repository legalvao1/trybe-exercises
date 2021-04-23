const funções = require('./numeroAleatorio');

jest.mock('./numeroAleatorio');

describe('Função que gera um numero aleatorio entre 0 e 100', () => {
  test('defina o retorno padrão como 10.', () => {
    funções.randomNumber = jest.fn().mockReturnValue(10);

      expect(funções.randomNumber()).toBe(10);
      expect(funções.randomNumber).toHaveBeenCalled();
      expect(funções.randomNumber).toHaveBeenCalledTimes(1)
  })
  test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    funções.randomNumber = jest.fn().mockImplementationOnce((n1, n2) => n1 / n2)

    expect(funções.randomNumber(10, 2)).toBe(5);
  })

  test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
    funções.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(funções.randomNumber(1, 2, 3)).toBe(6);
    expect(funções.randomNumber).toHaveBeenCalled();
    expect(funções.randomNumber).toHaveBeenCalledTimes(1);

    funções.randomNumber.mockReset();
    funções.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(funções.randomNumber(2)).toBe(4);
    expect(funções.randomNumber).toHaveBeenCalled();
    expect(funções.randomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('Implementando mock as funções', () => {
  test('Mudando toUpperCase para toLowerCase', () => {
   const maiuscula = jest.spyOn(funções, 'toUpperCase').mockImplementation((string) => string.toLowerCase());

    expect(maiuscula('SUNSHINE')).toEqual('sunshine');
    expect(maiuscula).toHaveBeenCalled();
    expect(maiuscula).toHaveBeenCalledTimes(1);
    expect(maiuscula).toHaveBeenCalledWith('SUNSHINE');

    funções.toUpperCase.mockRestore();

    expect(funções.toUpperCase('sunshine')).toBe('SUNSHINE')

  })

  test('firstStringLetter agora vai pegar a ultima letra', () => {
    funções.firstStringLetter = jest.fn().mockImplementation((string) => string.substr(-1))

    expect(funções.firstStringLetter('sunshine')).toEqual('e');
    expect(funções.firstStringLetter).toHaveBeenCalled();
    expect(funções.firstStringLetter).toHaveBeenCalledTimes(1);
    expect(funções.firstStringLetter).toHaveBeenCalledWith('sunshine');
  })

  test('concatString vai receber 3 param', () => {
    funções.concatString = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`)

    expect(funções.concatString('Good', 'morning', 'sunshine')).toEqual('Good morning sunshine');
    expect(funções.concatString).toHaveBeenCalled();
    expect(funções.concatString).toHaveBeenCalledTimes(1);
    expect(funções.concatString).toHaveBeenCalledWith('Good', 'morning', 'sunshine');
  })
})