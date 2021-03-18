function menorValor(array){
    let indice = 0;
    let valorAtual = 0;
    for(let index = 0; index < array.length; index += 1){
        if(valorAtual > array[index]){  // sempre atual for maior que o próximo pego o valor do próximo
           indice = index
           valorAtual = array[index]
        } 
    }
    return indice
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))