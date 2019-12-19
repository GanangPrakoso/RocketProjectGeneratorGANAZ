'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Initiators', 'email', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Initiators', 'email');
  }
};
