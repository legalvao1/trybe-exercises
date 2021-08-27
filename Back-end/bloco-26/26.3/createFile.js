const fs = require('fs').promises;
const readline = require('readline-sync');


const createFile = async (fileName, fileContent) => {

  try {
    await fs.writeFile(`./${fileName}.txt`, fileContent)
    return "ok";
  } catch {
    return "Falha ao criar o arquivo!";
  }
}

module.exports = { createFile };