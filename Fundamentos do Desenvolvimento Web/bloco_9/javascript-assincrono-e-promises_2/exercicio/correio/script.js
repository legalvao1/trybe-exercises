const form = document.querySelector('form')
const input = document.querySelector('input');


const fetchCep = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(result => result.json())
  .then(address => alert(address.bairro))
  .catch(error => alert('Não foi possível se conectar com a API '));
}

const recuperaCep = (event) => {
  event.preventDefault();
  const cepRecebido = input.value
  fetchCep(cepRecebido);
}

form.addEventListener('submit', recuperaCep)