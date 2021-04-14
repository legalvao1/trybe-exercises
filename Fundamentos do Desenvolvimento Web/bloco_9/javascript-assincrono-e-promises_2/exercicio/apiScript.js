// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const h2 = document.querySelector('#jokeContainer');

const fetchJoke = (url, object) => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  }//  myObject define o tipo de request method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' }
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2.innerHTML = data.joke);
};

window.onload = () => fetchJoke();

