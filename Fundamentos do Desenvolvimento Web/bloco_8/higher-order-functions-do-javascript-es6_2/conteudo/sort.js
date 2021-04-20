const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ] ordem alfabética

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
//istribui sempre por ordem alfabética . No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode!

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a); // decrescente
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]


// Array que será passado para o .sort
const numbers = [10, 21, 1, 3, 30, 2, 11, 23, 12, 22];

// Função callback que será usada para ordenar o array
function order(a, b) {
  return a - b;
}

// Função em que passamos o array numbers como parâmetro. Experimente remover a função passada como parâmetro na linha 12 (order) e veja o que acontece quando tentar fazer o sort novamente.
orderNumbers = (array) => {
  const answer = document.querySelector("#answer");
  const newArray = array.sort(order);
  answer.innerHTML = newArray;
};

const btnSort = document.querySelector("#btn-sort");

btnSort.addEventListener("click", () => orderNumbers(numbers));
