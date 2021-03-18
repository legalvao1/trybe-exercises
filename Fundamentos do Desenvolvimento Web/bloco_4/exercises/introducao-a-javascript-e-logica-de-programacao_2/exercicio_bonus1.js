// Usar o buble sort para colocar o array em ordem crescente

let array =[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for(let i = 1; i < array.length; i += 1){ // percorro o array a partir do indice 1
    for(let j = 0; j < array.length - 1; j += 1){ // percorro o array a partir do indice 0
        if(array[i] < array[j]){ // comparo se numero no indice 1 é maior que o numero do indice zero
            let position = array[i]; // adiciono o valor de i comparado na posição
 
            array[i] = array[j]; //troco os valores para que um seja maior que o outro
            array[j] = position;   
        }
    }
}

console.log(`A ordem crescente do array é ${array}`)
