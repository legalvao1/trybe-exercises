const techList1 = require('./techList.js');

describe('Testa a função techList', () => {
it('Testa se a função techList é definida', () => {
  expect(techList1).toBeDefined();
});
it('Testa se techList é uma função', () => {
  expect(typeof techList1).toBe('function');
});
it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
  expect(techList1(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
    {
      tech: 'CSS',
      name: 'Lucas'
    },
    {
      tech: 'HTML',
      name: 'Lucas'
    },
    {
      tech: 'JavaScript',
      name: 'Lucas'
    },
    {
      tech: 'Jest',
      name: 'Lucas'
    },
    {
      tech: 'React',
      name: 'Lucas'
    }
  ]);
});
it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
  expect(techList1([], 'Lucas')).toBe('Vazio!');
});
});
