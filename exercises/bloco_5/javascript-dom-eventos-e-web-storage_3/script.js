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