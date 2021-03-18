let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSoma = 0;
let media_aritmetica = 0;

for(let i = 0; i < numbers.length; i++){
    totalSoma = totalSoma + numbers[i]
    media_aritmetica = totalSoma / numbers.length;
  
}

if (media_aritmetica > 20){
    console.log("Valor maior do que 20")
}else{
    console.log("Valor menor ou igual a 20.")
}