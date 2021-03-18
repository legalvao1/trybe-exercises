let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

for(let indexNumb = 0; indexNumb < numbers.length; indexNumb += 1){
    if(numbers[indexNumb] % 2 != 0){
        numerosImpares += 1;
    }  
}
if(numerosImpares == 0){
    console.log("Nenhum ímpar encontrado");
}else{
    console.log(numerosImpares);
}

