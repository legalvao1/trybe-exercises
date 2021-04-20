const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const media = (array) => array.reduce((acc, curr) => {
    let total = (acc + curr / array.length).toFixed(1)
    return parseFloat(total);
}, 0)


function studentAverage() {
  // escreva seu código aqui
    const notas = grades.map((nota) => media(nota));
    return students.map((estudante, index) => ({
      name: estudante, average: (notas[index])
  }));
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);