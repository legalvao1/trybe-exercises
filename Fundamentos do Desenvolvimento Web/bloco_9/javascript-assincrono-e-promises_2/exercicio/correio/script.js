const form = document.querySelector('form')
const input = document.querySelector('input');
const textoCep = document.querySelector('.cep-result');

const creatAdress = ({ bairro, cep, logradouro, uf, localidade }) => {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const address = document.createElement('td');
  const bairroDistrito = document.createElement('td');
  const city = document.createElement('td');
  const UF = document.createElement('td');
  const CEP = document.createElement('td');
  address.innerHTML = logradouro;
  bairroDistrito.innerHTML = bairro;
  city.innerHTML = localidade;
  UF.innerHTML = uf;
  CEP.innerHTML = cep;

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
  .catch(error => alert('Informe o CEP'));
}

const recuperaCep = (event) => {
  event.preventDefault();
  const cepRecebido = input.value
  fetchCep(cepRecebido);
}

form.addEventListener('submit', recuperaCep)