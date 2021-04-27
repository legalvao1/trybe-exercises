let salarioBruto = 3000;
let salarioBase = salarioBruto;
let salarioLiquido = salarioBase;


// INSS

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 0.08);
}else if(salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09);
}else if (salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11);
}else{
    salarioBase =  salarioBruto - 570.88;
}


//IR

if(salarioBase <= 1903.98){
    salarioLiquido = salarioBase; 
}else if (salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
}else if (salarioBase <= 3571.05){
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
}else if (salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
}else{
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}



console.log("O salário liquido será de",salarioLiquido)