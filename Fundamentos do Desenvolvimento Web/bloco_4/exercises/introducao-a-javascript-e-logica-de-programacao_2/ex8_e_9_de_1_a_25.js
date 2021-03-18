let doUmAoVinteECinco = [];
let n = 25
let numerosDivididos = [

]
for(let index = 1; index <= n; index += 1){
    doUmAoVinteECinco.push(index);
}

console.log(doUmAoVinteECinco)

for(let indexArray = 0; indexArray <doUmAoVinteECinco.length; indexArray +=1){
    numerosDivididos.push(doUmAoVinteECinco[indexArray] / 2);
}

console.log(numerosDivididos)