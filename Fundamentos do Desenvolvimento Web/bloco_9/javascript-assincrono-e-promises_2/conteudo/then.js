const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);// se true retorna o número que é passado para o primeiro .then() com o number .
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)// Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo
  .then(msg => console.log(msg)); // que o usa para "logar" no console. mas o erro continua acontecendo.