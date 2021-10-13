'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Bookis', 'updatedAt', {
     type: Sequelize.DATE,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Bookis', 'updatedAt');
  }
};