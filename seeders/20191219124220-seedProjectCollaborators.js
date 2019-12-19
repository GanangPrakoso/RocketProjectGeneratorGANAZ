'use strict';
const fs = require ('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    let data = JSON.parse(fs.readFileSync('seedProjectCollaborators.json', 'utf8'))
    return queryInterface.bulkInsert('ProjectCollaborators',data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('ProjectCollaborators', null, {});
  }
};
