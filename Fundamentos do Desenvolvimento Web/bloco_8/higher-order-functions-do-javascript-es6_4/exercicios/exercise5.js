
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => 
    acc + curr.toLocaleLowerCase().split('').reduce((acumulador, current) => {
      if (current === 'a') {
        return acumulador + 1;
      } 
    return acumulador;
  }, 0), 0);
}
console.log(containsA())
assert.deepStrictEqual(containsA(), 20);

