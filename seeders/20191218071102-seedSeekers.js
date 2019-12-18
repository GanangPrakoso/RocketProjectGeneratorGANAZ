'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const data = JSON.parse(fs.readFileSync('seedSeekers.json', 'utf8'))
    let input = []
    for (let i = 0; i <= data.length - 1; i++) {
      let obj = {
        name: data[i].name,
        rating: data[i].rating,
        skills : data[i].skills,
        experience : data[i].experience,
        totalProject : data[i].totalProject
      }
      input.push(obj)
    }
    return queryInterface.bulkInsert('Seekers', input, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Seekers', null, {});
  }
};
