// ./dipExample.js

const axios = require('axios').default;
const fetch = require('node-fetch');
// import axios from 'axios';

// import fetch from 'node-fetch';

const url = 'https://icanhazdadjoke.com';

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err.message));
};

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const getJokes = (numberOfJokes, jokeRequester = requestWithFetch) => {
    for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
  };
  
getJokes(5, requestWithAxios);

module.exports = { getJokes };

// export default getJokes;