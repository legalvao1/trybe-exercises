const numbers = [19, 21, 30, 3, 45, 22, 15];
//função verifyEven . Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
//o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
