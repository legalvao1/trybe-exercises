let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for(let indexNumb = 0; indexNumb < numbers.length; indexNumb += 1){
    if(menorValor > numbers[indexNumb]){
        menorValor = numbers[indexNumb]
    }
}
console.log(menorValor)