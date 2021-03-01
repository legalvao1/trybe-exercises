let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let maiorValor = 0;

for(indexNumb = 0; indexNumb < numbers.length; indexNumb +=1){
    if(maiorValor < numbers[indexNumb]){
        maiorValor = numbers[indexNumb];
    }
}
console.log(maiorValor)