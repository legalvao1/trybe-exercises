let custoDoProduto = 500;
let valorDeVenda = 800;
let impostoSobreOCusto = 0.2


if (custoDoProduto <= 0 || valorDeVenda <= 0){
    console.log("Erro. Adicione um valor válido")
}

let valorCustoTotal = custoDoProduto + (custoDoProduto * impostoSobreOCusto)
let lucro = valorDeVenda - valorCustoTotal

console.log("Seu lucro foi de", lucro)