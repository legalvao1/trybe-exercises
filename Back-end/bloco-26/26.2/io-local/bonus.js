// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.


const readline = require('readline-sync');
const fs = require('fs').promises;


const files = [
    'file1.txt',
    'file2.txt',
    'file6.txt',
    'fileAll.txt',
];

let mensagem = files.map((file, index) => `${ index + 1} - ${file}`);
mensagem.unshift('Escolha o numero do arquivo que gostaria de ler');
mensagem = mensagem.join('\n');

const question = readline.questionInt(mensagem) - 1

const chosenFile = (fileNumber) => {
  const fileName = files.find((file, index) => {
    if(index == fileNumber) return file 
  })
  fs.readFile(`./${fileName}`, 'utf-8')
    .then(fileContent => console.log(fileContent))
    .catch(err => console.log(`"Arquivo inexistente": ${err.menssage}`))
}

chosenFile(question);