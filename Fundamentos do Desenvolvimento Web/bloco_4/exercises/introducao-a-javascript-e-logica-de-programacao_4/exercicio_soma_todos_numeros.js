function somatoria(numero){
    let soma = 0;
    for(let i = 1; i <= numero; i += 1){
        soma += i
    }
    return soma;
}

console.log(somatoria(5));