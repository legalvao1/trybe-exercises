const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

emailListInData.forEach((item) => showEmailList(item));

// Array contendo a lista de emails.
const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com"
];

// Função callback que recebe o array emailList como parâmetro.
const showEmailList = (list) => {
  const div = document.querySelector("#email-list");
  div.innerHTML = '';
  // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
  list.forEach((email) => {
    const p = document.createElement("p");
    p.innerHTML = `${email} : Enviado com sucesso!`;
    div.appendChild(p);
  });
}

const btnFilter = document.querySelector("#btn-filter");
btnFilter.addEventListener("click", () => showEmailList(emailList));

/////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
/////////////////////////////////////////////////////////////////////////////////////////
// exemplo trybe
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// meu teste
const maiusculo = (nome) => {
  nome.toUpperCase();
}

names.forEach(maiusculo);
console.log(names)