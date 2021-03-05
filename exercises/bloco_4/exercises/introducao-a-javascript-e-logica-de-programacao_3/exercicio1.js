// Imprimindo um quadrado de asteriscos

let n = 5;
let asterisco = '*';
let linhaEmbranco = '';


// for(let l = 0; l < n; l +=1){
//    linhaEmbranco = linhaEmbranco + asterisco ;
// };
// for(let c = 0; c < n; c += 1){
//     console.log(linhaEmbranco)
// };


for(let l = 0; l < n; l+= 1){  // percorro as linhas
    for(let c = 0; c < n; c +=1){  // percorro as colunas
        linhaEmbranco += asterisco; // adiciona um asterisco a cada coluna da minha linha
    }
    console.log(linhaEmbranco)  // imprimo a linha
    linhaEmbranco = '';  // zero a linha antes de começar o processo de novo.
}


let n = 5;
let triangulo = ''
let base = n;


for(let l = 0; l < n; l += 1){
    for(let c = 0; c < n; c += 1){
        if(base = n){
            triangulo += '*';
        }
    }
    console.log(triangulo)
    triangulo = ''
}
