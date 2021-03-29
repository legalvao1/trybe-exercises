//ex1  
//Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato

const cadastro = (string) => ({nome: string, email: `${string.split(' ').join('_').toLowerCase()}@trybe.com`});


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva')
    }
    return employees;
  };

console.log(newEmployees(cadastro));
