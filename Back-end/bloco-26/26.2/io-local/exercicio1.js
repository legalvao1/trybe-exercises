
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
  
}

const mathFunc = (a, b, c) => {
  return new Promise((resolve, reject) => {
  if ( typeof(a) != "number" || typeof(b) != "number" || typeof(c) != "number") 
    reject(Error("Informe apenas números"))
  
  const result = (a + b) * c;
  
  if (result < 50) {
    return reject(Error("Valor muito baixo"))
  }
  resolve(result);
  });
}

mathFunc(10, 20, 30)
  .then(results => console.log("O resultado é: %s", results))
  .catch(err => console.log("erro: %s", err.message));




function callDoMath() {
  /* Criamos um novo array de 3 posições
    * e utilizamos o `map` para gerar um número aleatório
    * para cada posição do Array
    */
  const randomNumbers = Array.from({ length: 3 }).map(generateRandomNumber);
  mathFunc(...randomNumbers)
  .then(results => console.log("O resultado é: %s", results))
  .catch(err => console.log("erro: %s", err.message));
}

callDoMath();


async function callDoMathAsync() {
  /* Criamos um novo array de 3 posições
    * e utilizamos o `map` para gerar um número aleatório
    * para cada posição do Array
    */
  const randomNumbers = Array.from({ length: 3 }).map(generateRandomNumber);

  try {
    const result = await mathFunc(...randomNumbers);
    console.log(result)

  } catch(err) {
    console.log(`${err.message}`)
  }
 }

callDoMathAsync();
