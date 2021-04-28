const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

//  resolvendo com uma verificação

const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

// resolvendo com um valor default

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// Assim, o default será utilizado caso nenhum argumento seja fornecido a função. 
// ocê pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário. 

// EXERCICIO

// escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.


const multiply = (number = 0 , value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));


