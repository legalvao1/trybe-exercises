// const service = require('./jest.fn');

// test("#randomRgbColor", () => {
//     // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
//   service.randomRgbColor = jest.fn();//estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.

//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled(); //Esse erro acontece porque a propriedade toHaveBeenCalled , assim como outras que serão ensinadas a seguir, são exclusivas para funções simuladas. 
// });


// const service = require('./jest.fn');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)"); // estamos manualmente chamando a função service.randomRgbColor(); . Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
//   expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
// });

const service = require('./jest.fn');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});