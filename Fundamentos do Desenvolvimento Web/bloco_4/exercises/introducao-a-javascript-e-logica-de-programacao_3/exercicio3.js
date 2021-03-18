
let n = 5;
let asterisco = '*';
let linhaEmbranco = '';
let contador = 0;

for(let l = 0; l < n; l += 1){
    contador = l // Recebe a linha que eu estou
    linhaEmbranco = ' '
    for(let c = 1; c <= n; c += 1){
        
        if(c == n){ // toda vez que a coluna for igual ao numero de n, imprime asterisco
            linhaEmbranco += asterisco;
        }else if(c == n - contador){ //toda vez que minha coluna for igual ao numero de n - a linha que eu estiver l
            linhaEmbranco += asterisco; // acrescenta asterisco
            contador -= 1; // e subtraio 1 da linha atual para que o asterisco seja colocado o numero de x que eu quero.
        }else{
            linhaEmbranco += ' '; // senão imprimo uma linha em branco
        }
    }
    console.log(linhaEmbranco)    
}



