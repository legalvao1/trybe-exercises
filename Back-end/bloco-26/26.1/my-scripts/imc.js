const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');

const altura = readline.questionInt('Qual sua altura? ');

const imcTable = (imc) => {
  if (imc < 18.5 ){
    return "Situação Abaixo do peso (magreza)";
  } else if (imc <= 24.9) {
    return "Situação Peso normal";
  } else if (imc <= 29.9) {
    return "Situação Acima do peso (sobrepeso)";
  } else if (imc <= 34.9) {
    return "Situação Obesidade grau I";
  } else if (imc <= 39.9) {
    return "Situação Obesidade grau II";
  }
  return "Situação Obesidade graus III e IV";
}

const calculaImc = (peso, altura) => {

  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc =  (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
  console.log(imcTable(imc));
} ;

calculaImc(peso, altura);


module.exports = calculaImc;