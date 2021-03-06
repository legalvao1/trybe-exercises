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