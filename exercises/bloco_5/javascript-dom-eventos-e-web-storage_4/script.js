//COR DE FUNDO
let backgoundColor = document.querySelector('.background-container');
let cor1 = document.createElement('div');
cor1.style.backgroundColor = '#f8ad9d';
backgoundColor.appendChild(cor1);
let cor2 = document.createElement('div');
cor2.style.backgroundColor = '#ffd7ba';
backgoundColor.appendChild(cor2);
let cor3 = document.createElement('div');
cor3.style.backgroundColor = '#83c5be';
backgoundColor.appendChild(cor3);



cor1.addEventListener('click',function(){
    localStorage.setItem('corDeFundo', document.body.style.backgroundColor = '#f8ad9d');
});
cor2.addEventListener('click',function(){
    localStorage.setItem("corDeFundo", document.body.style.backgroundColor = '#ffd7ba');
});
cor3.addEventListener('click',function(){
    localStorage.setItem('corDeFundo', document.body.style.backgroundColor = '#83c5be');
});