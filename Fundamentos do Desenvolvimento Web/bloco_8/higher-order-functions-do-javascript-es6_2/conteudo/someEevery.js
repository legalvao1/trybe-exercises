// Array que será passado para o .some
const numbers = [2, 4, 6, 8, 12, 14, 16, 17];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se houver pelo menos um número ímpar, a callback retornará true e a frase "Pelo menos um número é ímpar". Caso contrário, o retorno da callback é false, indicando que não há número ímpar no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.some(isOdd)) {
    answer.innerHTML = "Pelo menos um número é ímpar";
  } else {
    answer.innerHTML = "Nenhum número é impar";
  }
};

const btnSome = document.querySelector("#btn-some");

btnSome.addEventListener("click", () => checkIsOdd(numbers));


// Array que será passado para o .every
const numbers = [1, 3, 5, 7, 9, 10];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, a callback retornará true e a frase "Todos os números são ímpares". Caso contrário, o retorno da callback é false, indicando que há um número par no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.every(isOdd)) {
    answer.innerHTML = "Todos os números são ímpares";
  } else {
    answer.innerHTML = "Pelo menos um número é par";
  }
};

const btnEvery = document.querySelector("#btn-every");

btnEvery.addEventListener("click", () => checkIsOdd(numbers));


//some

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//every

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

  //Observe que foi usado Object.values junto com o every . Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!