function palindromo(string){
    let ePalindromo = string.split("").reverse().join('');
    return string === ePalindromo;
}

console.log(palindromo('sabonete'));
console.log(palindromo('arara'));