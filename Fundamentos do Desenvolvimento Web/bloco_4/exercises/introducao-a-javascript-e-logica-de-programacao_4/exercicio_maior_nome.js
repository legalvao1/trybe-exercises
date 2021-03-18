function maiorNome(array){
    let nome = '' // variavel que vai receber uma string
    for(index = 0; index < array.length; index +=1){ //para cada indice do meu array
        if(nome.length  < array[index].length){ //se o tamanho do meu nome for menor que o tamanho do nome no index
            nome = array[index]  // nome recebe o nome na posição atual
        }
    }
    return nome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))