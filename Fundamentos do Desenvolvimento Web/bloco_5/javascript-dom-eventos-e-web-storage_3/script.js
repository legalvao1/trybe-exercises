function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercício 1

  function creatDaysOfMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDays = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1){
      const days = dezDaysList[index];
      const dezDaysListItem = document.createElement('li')
      dezDaysListItem.innerHTML = days;

      if (days === 24 || days === 31){
        dezDaysListItem.className = 'day holiday';
      } else if (days === 4 || days === 11 || days === 18 ){
        dezDaysListItem.className += 'day friday';
      } else if (days === 25){
        dezDaysListItem.className += 'day holiday friday';
      }else {
        dezDaysListItem.className += 'day';
      }

      dezDays.appendChild(dezDaysListItem);
    };
  };

  creatDaysOfMonth();

  // Exercício 2

  function createHolidayButton(buttonName){
    let buttonsContainer = document.querySelector('.buttons-container');
    let holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerHTML = buttonName;
    buttonsContainer.appendChild(holidayButton);

  };

  createHolidayButton('Feriados');

  //Exercício 3
function feriados(){
    let feriado = document.querySelectorAll('.holiday');
    let botaoferiado = document.querySelector('#btn-holiday');
    let corDeFundo = 'rgb(238,238,238)';
    let novaCor = 'white';

    botaoferiado.addEventListener('click', function(){
      for (let i = 0; i < feriado.length; i += 1){
          if (feriado[i].style.backgroundColor === novaCor){
            feriado[i].style.backgroundColor = corDeFundo;
          } else {
            feriado[i].style.backgroundColor = novaCor;
          }
      }
    });
}
feriados();

//Exercício 4:

function createFridayButton(string){
    let buttonContainer = document.querySelector('.buttons-container');
    let fridayButtom = document.createElement('button');
    fridayButtom.id = 'btn-friday';
    fridayButtom.innerHTML = string;
    buttonContainer.appendChild(fridayButtom);
}

createFridayButton('Sexta-feira');

//Exercício 5:

function botaoSextou(array){
    let sexta = document.querySelectorAll('.friday');
    let botaoSextou = document.querySelector('#btn-friday');
    let sextou = 'Sextouuuu'


    botaoSextou.addEventListener('click', function(){
        for (let i = 0; i < sexta.length; i += 1) {
            if(sexta[i].innerHTML === sextou) {
                sexta[i].innerHTML = sextasFeiras[i];
            } else {
                sexta[i].innerHTML = sextou;
            }
        }
    })
}
let sextasFeiras = [4, 11, 18, 25]  // tem que passar esses array
botaoSextou(sextasFeiras);

//Exercício 6:

function mouseSobre(){
  let dia = document.querySelector('#days');
  dia.addEventListener('mouseover', function(evento) {
    evento.target.style.fontSize = '30px';
  })
};

function mouseFora(){
  let dia = document.querySelector('#days');
  dia.addEventListener('mouseout', function(evento){
    evento.target.style.fontSize = '20px'
  })
};

mouseSobre();
mouseFora();

//Exercício 7:

function creatTask(string) {
    let minhasTarefas = document.querySelector('.my-tasks');
    let tarefa = document.createElement('span');
    tarefa.innerHTML = string;

    minhasTarefas.appendChild(tarefa);
}

creatTask('Estudar')

//Exercício 8:
function corDaTarefa (cor){
    let minhasTarefas = document.querySelector('.my-tasks');
    let tarefaCor = document.createElement('div');
    tarefaCor.className = 'task';
    tarefaCor.style.backgroundColor = cor;
    
    minhasTarefas.appendChild(tarefaCor);
}

corDaTarefa('green');

//Exercício 9:

function tarefaSelecionada(){
    let tarefa = document.querySelector('.task');

    tarefa.addEventListener('click', function(){
        if (tarefa.className ==='task selected'){
            console.log(tarefa.className = 'task');
        } else {
            console.log(tarefa.className = 'task selected');
        }
    })
}

tarefaSelecionada();

//Exercício 10:

function adicionandoCorAoDia(){
    let dias = document.querySelector('#days'); // pego elem do id dia
    let tarefas = document.querySelector ('.task'); // pego elem da classe
    let tarefaSelecionada = document.getElementsByClassName('task selected'); // pego os elem classe
    let corDasTarefas = tarefas.style.backgroundColor; // atribuo a cor de fundo das tarefas a uma variavel

    dias.addEventListener('click', function (evento){ // adiciono o evento de click para os dias 
        let corDoEvento = evento.target.style.color;  // variavel que vai receber a cor do evento
        if (tarefaSelecionada.length > 0 && corDoEvento !== corDasTarefas){ // verifico se há taks selected e a cor atribuida
            let cor = tarefaSelecionada[0].style.backgroundColor; // variavel que recebera a cor de fundo da tarefa
            evento.target.style.color = cor; // atribuindo cor de fundo ao evento 
        } else if (corDoEvento === corDasTarefas && tarefaSelecionada.length !== 0){// se cor do evento for igual a da
            evento.target.style.color = 'rgb(119,119,119)';// tarefa e não houver tarefa selecionada atribuo a cor padrão.
        }
    });
};

adicionandoCorAoDia();

// Bônus:

function adicionaCompromisso(){
  let caixaTexto = document.querySelector('#task-input')
  let botaoAdicionar = document.querySelector('#btn-add')
  let listaDeCompromissos = document.querySelector('.task-list')
  

  botaoAdicionar.addEventListener('click', function(){
    if (caixaTexto.value.length === 0){
      alert('Erro! Campo Vazio')
    }
    let listItem = document.createElement('li')
    listItem.innerHTML = caixaTexto.value;
    listaDeCompromissos.appendChild(listItem);
    caixaTexto.value = ''
  })

  caixaTexto.addEventListener('keyup', function(evento){
    if (evento.keyCode === 13 && caixaTexto.value !== 0) {
      let listItem = document.createElement('li');
      listItem.innerHTML = caixaTexto.value;

      listaDeCompromissos.appendChild(listItem);
      caixaTexto.value = ''
    }
  })
}
adicionaCompromisso();