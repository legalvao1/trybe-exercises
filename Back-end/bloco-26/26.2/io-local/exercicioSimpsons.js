const fs = require('fs').promises;


// // Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent))
  .then(simpsons => simpsons.map(({ id, name }) => `${ id } - ${ name }`))
  .then(strings => strings.forEach((string) => console.log(string)))
  .catch(err => console.log("Não foi possível ler o arquivo: %s", err.message))

// //Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const getCharacterById = (id) => {
  return new Promise(async(resolve, reject) => {
    const char = await fs.readFile('./simpsons.json', 'utf-8')
      .then(fileContent => JSON.parse(fileContent))
      .then(findChar => findChar.find((char) => char.id == id ))
      // .then(character => console.log("linha dezoito",character) || character)

    if (char == undefined) reject(Error("id não encontrado"))
    resolve(char)
    })
}

getCharacterById(11)
  .then(result => console.log(result.name))
  .catch(err => console.log(err.message))
 
getCharacterById(1)
  .then(result => console.log(result.name))
  .catch(err => console.log(err.message))


  //Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const removeCharacter = async () => {
  return await fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
    .then((list) => list.filter((character) => character.id != 6 && character.id != 10))
    .then((newCharacterList) => fs.writeFile('./simpsons.json', JSON.stringify(newCharacterList)))
}

removeCharacter();

//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

const simpsonsFamilyFile = async() => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
    .then((list) => list.filter((character, index) => index < 4))

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons))
}

simpsonsFamilyFile();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz 

const addNelson = async() => {
  const simpsons = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
  
  simpsons.push({ id: "5", name: "Nelson Muntz" });

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons))
}

addNelson();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const changeNelsonForMaggie = () => {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.name != "Nelson Muntz"))
    .then(family => family.concat([{ id: "5", name: "Maggie Simpson" }]))
    .then(familyWithMaggie => fs.writeFile('./simpsonsFamily.json', JSON.stringify(familyWithMaggie)))
}

changeNelsonForMaggie()