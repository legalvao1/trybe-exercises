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

// COR DA FONTE -------------------------------------------------------------------------------------
let fontColor = document.querySelector('.cor-texto-container');
let font1 = document.createElement('div');
font1.style.backgroundColor = 'black'
fontColor.appendChild(font1);

let font2 = document.createElement('div');
font2.style.backgroundColor = '#fb8500'
fontColor.appendChild(font2);

let font3 = document.createElement('div');
font3.style.backgroundColor = '#e76f51'
fontColor.appendChild(font3);

font1.addEventListener('click', function(){
    localStorage.setItem('corDaFonte', document.body.style.color = 'black')
});

font2.addEventListener('click', function(){
    localStorage.setItem('corDaFonte', document.body.style.color = '#fb8500')
});

font3.addEventListener('click', function(){
    localStorage.setItem('corDaFonte', document.body.style.color = '#e76f51')
});