function maiorValor(array){
    let indice = 0;
    let valorAtual = 0;
    for(let index = 0; index < array.length; index += 1){
        if(valorAtual < array[index]){  // sempre atual for menor que o próximo pego o valor 
           indice = index
           valorAtual = array[index]
        } 
    }
    return indice
}

console.log(maiorValor([20, 30, 6, 70, 40, 10]))