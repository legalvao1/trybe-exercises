const readline = require('readline-sync');

const guessTheNumber = () => {
    const numero = readline.questionInt("Digite um numero: ")
    const randomNumber = Math.round(Math.random() * 10 + 1);
    if (randomNumber == numero) {
        console.log("Parabéns, número correto!");
    }
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
};

guessTheNumber();

module.exports = guessTheNumber;