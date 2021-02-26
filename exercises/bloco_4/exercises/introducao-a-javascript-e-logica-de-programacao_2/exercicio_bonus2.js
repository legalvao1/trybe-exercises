// Usar o buble sort para colocar o array em ordem decrescente

let array =[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for(let i = 1; i < array.length; i += 1){ // percorro o array a partir do indice 1
    for(let j = 0; j < array.length; j += 1){ // percorro o array a partir do indice 0
        if(array[i] > array[j]){ // comparo se numero no indice 1 é menor que o numero do indice zero
            let position = array[i]; // adiciono o valor de i comparado na posição

            array[i] = array[j]; //troco os valores para que um seja menor que o outro
            array[j] = position;
        }
    }
}

console.log(`A ordem descrecente do array é ${array}`)