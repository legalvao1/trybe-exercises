const estadosBrasileiros = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}

const listaDeEstados = document.getElementById('input-estado');

for (let key in estadosBrasileiros) {
    const estado = document.createElement('option');
    estado.value = key
    estado.innerHTML = estadosBrasileiros[key];
    listaDeEstados.appendChild(estado);
}

function checaEmail (){
  const email = document.querySelector('#input-email');
  let emailDigitado = email.value;
  console.log(emailDigitado)
  const formatoDoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(emailDigitado); //REGEX gabarito exercício
  if (!formatoDoEmail && emailDigitado.length) {
    email.value = '';
    alert ('email inválido');
    return false
  }
  return formatoDoEmail
}

const nome = document.getElementById('name-input');
const email = document.getElementById('input-email');
const cpf = document.getElementById('input-cpf');
const endereco = document.getElementById('input-endereco');
const cidade = document.getElementById('input-cidade');
const estadoEscolhido = document.getElementById('input-estado');
const reusumoCurriculo = document.getElementById('resumo-curriculo');
const cargo = document.getElementById('cargo-input');
const descricaoCargo = document.getElementById('descricao-cargo-input');
const dataDeInicio = document.getElementById('data-input');

const formsElements = [nome, email, cpf, endereco, cidade, estadoEscolhido, reusumoCurriculo, cargo, descricaoCargo, dataDeInicio];
const resultados= document.querySelector('.curriculo')
const botaoSubmit = document.getElementById('enviar-formulario');
const form = document.querySelector('form');


function renderizaCurriculo(evento){
  evento.preventDefault();  // não deixa o formulário ser submetido
  for (let key in formsElements) {
    // if (checaEmail()){  // verifico se o email é válido
    const resultado = document.createElement('div')
    resultado.innerHTML = formsElements[key].value;
    resultados.appendChild(resultado);
    // }
  }
}
// form.addEventListener('submit',renderizaCurriculo);  // evento no formulario ao submete-lo, assim ele faz as validaçoes
//dos campos obrigatórios
const botaoLimparCampos = document.querySelector('#clear-buttom');

function limpaCampos(){
  document.getElementById('myForm').reset() // reseta o formulário 
  const curriculo = document.querySelectorAll('.curriculo') // para resetar os elem na div

  for (let i = 0; i < curriculo.length; i+= 1) {
    curriculo[i].innerHTML = ''; 
  }
}

botaoLimparCampos.addEventListener('click', limpaCampos)


new window.JustValidate('#myForm', {
  messages: {
      name: 'Campo obrigatório'
  }
});

