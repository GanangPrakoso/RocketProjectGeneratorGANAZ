'use strict';
const fs = require('fs')
const readFile = fs.readFileSync('./initiators.csv', 'utf8').split('\n')
// console.log(readFile)

let insertInitiator = []
for (let i = 0; i < readFile.length; i++) {
  let split = readFile[i].split(',')
  // console.log(split)
  let obj = {
    name: split[1],
    email: split[2],
    password: split[3]
  }
  insertInitiator.push(obj)
}
// console.log(insertInitiator)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Initiators', insertInitiator, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Initiators', null, {});
  }
};
