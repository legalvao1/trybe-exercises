const form = document.querySelector('form')
const input = document.querySelector('input');
const serachCepContainer = document.querySelector('#search-cep-container')
const tbody = document.querySelector('tbody');
const table = document.getElementsByTagName('table');
const newSearchButton = document.querySelector('.new-search-button')


//http://diego-cipriano.blogspot.com/2010/09/mascaras-javascript-data-cep-cpf-cnpj.html

const creatAdress = ({ bairro, cep, logradouro, uf, localidade }) => {
  const tr = document.createElement('tr');
  const address = document.createElement('td');
  const bairroDistrito = document.createElement('td');
  const city = document.createElement('td');
  const UF = document.createElement('td');
  const CEP = document.createElement('td');
  tr.id = 'linha'
  table[0].className = "cep-result table table-primary"
  address.innerHTML = logradouro;
  address.className = "coluna-logradouro";
  bairroDistrito.innerHTML = bairro;
  bairroDistrito.className = "coluna-bairro";
  city.innerHTML = `${localidade}/${uf}`;
  city.className = "coluna-uf"
  CEP.innerHTML = cep;
  CEP.className = "coluna-cep";
  newSearchButton.classList.remove('esconde');

  tr.appendChild(address);
  tr.appendChild(bairroDistrito);
  tr.appendChild(city);
  tr.appendChild(UF);
  tr.appendChild(CEP);
  tbody.appendChild(tr);

}


const fetchCep = (cep) => {  
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(result => result.json())
  .then(address => creatAdress(address))
  .catch(error => alert('API Indisponível'));
}

const recuperaCep = (event) => {
  event.preventDefault();
  const cepRecebido = input.value
  if(cepRecebido !== '') {
    fetchCep(cepRecebido);
    input.value = '';
    hideSearchCep();
  } else {
    alert('Informe um CEP!')
  }
}

const hideSearchCep = () => {
  serachCepContainer.classList.add('esconde');
}

const backTosearchCep = () => {
  const tr = document.querySelector('#linha')
  tbody.removeChild(tr);
  document.querySelector('table').classList.add('esconde'); 
  newSearchButton.classList.add('esconde');
  serachCepContainer.classList.remove('esconde');
}

form.addEventListener('submit', recuperaCep);
// form.addEventListener('submit', hideSearchCep);
newSearchButton.addEventListener('click', backTosearchCep)
