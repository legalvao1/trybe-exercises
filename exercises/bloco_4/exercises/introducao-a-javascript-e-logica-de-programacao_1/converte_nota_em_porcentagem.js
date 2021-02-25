let porcentagem = 99;

if(porcentagem <= 0 || porcentagem > 100){
    console.log("Erro nota incorreta");
}else if(porcentagem >= 90){
    console.log("Nota A");
}else if (porcentagem >= 80){
    console.log("Nota B");
}else if (porcentagem >= 70){
    console.log("Nota C");
}else if (porcentagem >= 60){
    console.log("Nota D");
}else if (porcentagem >= 50){
    console.log("Nota E");
}else if (porcentagem < 50){
    console.log("Nota F")
}else{
    console.log("Não se aplica.")    
}