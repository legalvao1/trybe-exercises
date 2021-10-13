'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Bookis', [
    {
      title: 'livro 1',
      author: 'autor 1',
      pageQuantity: 0,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'livro 2',
      author: 'autor 2',
      pageQuantity: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {}),

  down: async (queryInterface, _Sequelize) =>queryInterface.bulkDelete('Bokis', null, {}),
};
