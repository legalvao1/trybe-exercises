const fetch = require('node-fetch');

function verifiedFetch(url) {//url do nosso 
  return new Promise((resolve, reject) => { //retorna uma promisse
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {endpoint. //dentro da promise verifica Se o endpoint for o certo
      fetch(url)//  fetch para fazer uma chamada ao endpoint,
        .then((r) => r.json()) //transformamos a resposta em um json utilizando o método .json() 
        .then((r) => resolve(r.value));// resolve para retornar a nossa resposta.
    } else {
      reject(new Error('endpoint não existe'));// url não seja o certo, levantamos um error.
    }// construtor new Error para levantar um error.
  });
}