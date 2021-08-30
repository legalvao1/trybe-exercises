const fs = require('fs').promises;
const crypto = require('crypto');

const getSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
}

// getSimpsons()
//   .then(response => console.log(response))
//   .catch(err => console.log(err.message));


const addSimpsons = (simpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
}


function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}


module.exports = { getSimpsons, addSimpsons, generateToken };