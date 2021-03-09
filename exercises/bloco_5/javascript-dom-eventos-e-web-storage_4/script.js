//COR DE FUNDO
let backgoundColor = document.querySelector('.background-container');
let cor1 = document.createElement('div');
cor1.style.backgroundColor = '#f8ad9d';
cor1.style.marginLeft = '10%';
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
font1.style.marginLeft = '11%';
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
// TAMANHO DA FONTE ------------------------------------------------------------------------------------
let fontSizeContainer = document.querySelector(".font-size-container")
let fontsize1 = document.createElement('div');
fontsize1.style.marginLeft = '5%';
fontsize1.style.width = '25px';
fontsize1.style.height = '25px';
fontSizeContainer.appendChild(fontsize1);
let fontsize2 = document.createElement('div');
fontsize2.style.width = '35px';
fontsize2.style.height = '35px';
fontSizeContainer.appendChild(fontsize2);
let fontsize3 = document.createElement('div');
fontsize3.style.width = '45px';
fontsize3.style.height = '45px';
fontSizeContainer.appendChild(fontsize3);

fontsize1.addEventListener('click', function(){
    localStorage.setItem('tamanhoDaFonte', document.body.style.fontSize = '15px')
});

fontsize2.addEventListener('click', function(){
    localStorage.setItem('tamanhoDaFonte', document.body.style.fontSize = '18px')
});

fontsize3.addEventListener('click', function(){
    localStorage.setItem('tamanhoDaFonte', document.body.style.fontSize = '20px')
});

// ESPAÇAMENTO ENTRE LINHAS------------------------------------------------------------------------------------
let lines = document.querySelector('.line-container')
let lineHeight1 =  document.createElement('div');
lineHeight1.style.height = '5px'
lines.appendChild(lineHeight1)
let lineHeight2=  document.createElement('div');
lineHeight2.style.height = '10px'
lines.appendChild(lineHeight2)
let lineHeight3 =  document.createElement('div');
lineHeight3.style.height = '15px'
lines.appendChild(lineHeight3)

lineHeight1.addEventListener('click', function(){
    localStorage.setItem('espaçamentoLinha', document.body.style.lineHeight = '15px')
});

lineHeight2.addEventListener('click', function(){
    localStorage.setItem('espaçamentoLinha', document.body.style.lineHeight = '20px')
});

lineHeight3.addEventListener('click', function(){
    localStorage.setItem('espaçamentoLinha', document.body.style.lineHeight = '25px')
});