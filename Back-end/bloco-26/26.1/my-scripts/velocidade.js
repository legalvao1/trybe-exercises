const readline = require('readline-sync');

const distancia = readline.questionInt("Qual a distancia? (metros)");

const tempo = readline.questionInt("Qual o tempo? (segundos)");

const velocidadeMedia = (distancia, tempo) => {
    console.log(`A velocidade média será de ${(distancia / tempo).toFixed(2)}m/s`);
}

velocidadeMedia(distancia, tempo);

module.exports = velocidadeMedia;