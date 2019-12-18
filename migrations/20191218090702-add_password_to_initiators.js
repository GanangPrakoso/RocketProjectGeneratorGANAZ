'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Initiators', 'password', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Initiators', 'password');
  }
};
