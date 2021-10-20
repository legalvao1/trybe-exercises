const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { User } = require('../../../models');

describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(User, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called User.findAll', async () => {
      await chai.request(app)
        .get('/user');

      expect(User.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.empty;
    });
  });
});

//Se quisermos testar nosso model em sí, podemos utilizar bibliotecas específicas para nos ajudar nessa tarefa. Uma bastante utilizada é a Sequelize Test Helpers . TEM QUE INSTALAR
// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// const UserModel = require('../../../models/user');

// describe('O model de User', () => {
//   const User = UserModel(sequelize, dataTypes);
//   const user = new User();

//   describe('possui o nome "User"', () => {
//     checkModelName(User)('User');
//   });

//   describe('possui as propriedades "fullName" e "email"', () => {
//     ['fullName', 'email'].forEach(checkPropertyExists(user));
//   });
// });