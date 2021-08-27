const { verifyNumber } = require('./verifyNumber');
const { createFile } = require('./createFile');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');


describe('Teste da função verifyNumber', () => {
  describe('Se o valor de entrada é um numero', () => {
    it('Se o numero maior que zero é positivo', ()=> {

      const numero = 4
      expect(verifyNumber(numero)).to.be.equals('positivo')

    });
  
    it('Se o número menor que zero é negativo', () => {
      
      const numero = -4
      expect(verifyNumber(numero)).to.be.equals('negativo')

    });
  
    it('Se o número igual a zero retorna neutro', () => {
      
      const numero = 0
      expect(verifyNumber(numero)).to.be.equals('neutro')

    });
  });

  describe('Se o valor de entrada não for um numero', () => {
    it('Retorna uma mensagem de erro', () => {
      const numero = '5'
      expect(verifyNumber(numero)).to.be.equals('o valor deve ser um número')
    });
  })
});


// sem sinon
// describe('Teste da função createFile', () => {
//   describe('Testa se recebeu parametros', () => {
//     it('Testa se é uma string', async () => {
//       const resposta = await createFile('meu-arquivo', 'conteudo do arquivo');

//       expect(resposta).to.be.a('string');
//     });
  
//     it('Testa se o retorno é um ok', async ()=> {
//       const resposta = await createFile('meu-arquivo', 'conteudo do arquivo');

//       expect(resposta).to.be.equals('ok');
//     });
//   })
// });


// com sinon

describe('Teste da função createFile', () => {
  describe('Testa se recebeu parametros', () => {

    before(() => {
      sinon.stub(fs, 'writeFile').resolves('ok');
    });

    after(() => {
      fs.writeFile.restore();
    })

    it('Testa se é uma string', async () => {
      const resposta = await createFile('meu-arquivo', 'conteudo do arquivo');

      expect(resposta).to.be.a('string');
    });
  
    it('Testa se o retorno é um ok', async ()=> {
      const resposta = await createFile('meu-arquivo', 'conteudo do arquivo');

      expect(resposta).to.be.equals('ok');
    });
  })
});
