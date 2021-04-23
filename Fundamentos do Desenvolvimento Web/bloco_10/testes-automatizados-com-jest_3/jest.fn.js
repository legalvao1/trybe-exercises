// forma mais simples de se mockar algo: ele transforma uma função em uma simulação. Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, o comportamento definido no mock será chamado, em vez da função original.

function randomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  module.exports = { randomRgbColor };