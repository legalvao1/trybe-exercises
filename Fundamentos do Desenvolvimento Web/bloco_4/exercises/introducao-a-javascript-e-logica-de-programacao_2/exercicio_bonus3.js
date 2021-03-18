let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 2]

let arrayMultiplicado =[];

for(let i = 0; i < array.length; i += 1){ 
  
    if(array[i + 1]){ // se tiver numero seguinte
        arrayMultiplicado.push(array[i] * array[i + 1]); 
    }else{
        arrayMultiplicado.push(array[i] * 2); 
    }
}

console.log(`O resultado do array multiplicado é ${arrayMultiplicado}`)

// Resultado [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]