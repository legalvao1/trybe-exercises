let nomeDaPeca = "PEAO";

switch(nomeDaPeca.toLowerCase()){
    case "peao":
        console.log("Apenas para frente, uma casa por vez");
        break;
    case "bispo":
        console.log("Linha reta diagonal, quantas casas preferir.Não pode pular peças");
        break;
    case "torre":
        console.log("Linha reta horizontal quantas casas preferir.Não pode pular peças");
        break;
    case "cavalo":
        console.log("Pode pular peças, movendo-se em L");
        break;
    case "rainha":
        console.log("Move-se para todos os lados.Não pode pular peças.");
        break;
    case "rei":
        console.log("Peça mais importante, move-se apenas uma casa para qualquer direção.");
        break;
    default:
        console.log("Não se aplica");
        break;
}