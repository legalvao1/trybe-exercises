// solução com filter e reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven  = (number) => number % 2 == 0;
const sumPair = (currentNumber, number) => currentNumber + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);
console.log(sumNumbers(numbers))

// solução só com reduce

const onlyPairs = (currentNumber, number) => (number % 2 == 0 ? currentNumber + number : currentNumber);

const sumOnlyPair = (array) => array.reduce(onlyPairs, 0);
console.log(sumOnlyPair(numbers));