function numeroRepetido(array){
    let numero = 0;
    let aparicoes = 0;
    for(let i = 0; i < array.length; i +=1){ // varre o array
        let quantidadeDeRepeticoes = 0;  // recebe a quantidade de vezes que o numero apareceu
        for(let a = 0; a < array.length; a += 1){ // varre todo o array procurando um valor igual[a] na posiçao [i]
            if(array[a] == array[i]){
                quantidadeDeRepeticoes += 1; //adiciono a ocorrencia 
            }
        }
        if(quantidadeDeRepeticoes  > aparicoes){ // comparo se a quantidade é maior que a da ocorrencia atual
            aparicoes = quantidadeDeRepeticoes;  // se for atribuo a de maior valor e o numero
            numero = array[i];
        }
    }
    return numero;
}

console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3]));