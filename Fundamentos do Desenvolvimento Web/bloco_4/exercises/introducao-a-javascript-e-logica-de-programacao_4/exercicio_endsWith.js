// forma mais fácil

// function verificaFimPalavra(word, ending){
//     return word.endsWith(ending)
    
// }


function verificaFimPalavra(word, endsWith){
    let palavra = word.split(""); // divido a palabra e separo entre ""
    let finalPalavra = endsWith.split("");
    let eIgual = true;  // variavel de retorno
    for(let i = 0; i < finalPalavra.length; i += 1){  // varro o final da palavra
        if(palavra[palavra.length-finalPalavra.length+i] != finalPalavra[i]){ //se a letra no indice for diferente da do indice do final
            eIgual = false;  // variavel de retorno recebe falso.
        }
    }
    return eIgual;
}


console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"))

