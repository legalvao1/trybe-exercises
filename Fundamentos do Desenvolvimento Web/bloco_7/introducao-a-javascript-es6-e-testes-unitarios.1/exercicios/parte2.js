// ex1 Fatorial

const fatorial = (numero) => {
    let fatorado = 1
    for (let i = 1; i < numero; i += 1) {
        fatorado = fatorado * (i + 1);
    }
    return fatorado;
}

console.log(fatorial(6))


// ex2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => {
    const fraseDivida = frase.split(' ')
    let maior = 0;
    let maiorPalavra = '';
    for (let p in fraseDivida) {
        if (maior < fraseDivida[p].length){
            maior = fraseDivida[p].length;
            maiorPalavra = fraseDivida[p];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

// ex3 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('#button');
const clickes = document.querySelector('#click-button');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount += 1;
    clickes.innerHTML = clickCount;
})

// ex4 - Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals


// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"


const procuraX = (string) => {
    const stringDeterminada = 'Tryber x aqui!';
    const novaString = stringDeterminada.replace('x', string);
    return novaString;
}

// console.log(procuraX('mulilo'));


// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .


var skills = ['let', 'const', 'template literal', 'arrow functions', 'ternary operator'];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".


const concatena = (resultado) => {
    const string2 = 'Minhas cinco principais habilidades são:';
    const string3 = '#goTrybe.';
    const skillOrdenada = skills.sort();

    return `${resultado} ${string2}
    ${skillOrdenada[0]}
    ${skillOrdenada[1]}
    ${skillOrdenada[2]}
    ${skillOrdenada[3]}
    ${skillOrdenada[4]} ${string3}`;
}

console.log(concatena(procuraX('mulilo')));