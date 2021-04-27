let anguloA = 45;
let anguloB = 35;
let anguloC = 105;

// let eTriangulo = anguloA + anguloB + anguloC;

// if (eTriangulo == 180){
//     console.log("É um triangulo")
// }else{
//     console.log("Não é um triangulo")
// }

function isTriangle(anguloA, anguloB, anguloC){
    let calculo = anguloA + anguloB + anguloC;
    if (calculo == 180);{
        return 'É um triangulo'
    }
    return 'Não é um triangulo'    
};

isTriangle(anguloA, anguloB, anguloC)