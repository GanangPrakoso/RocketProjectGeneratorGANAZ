'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Initiator extends Model {

  }

  Initiator.init({
    name: DataTypes.STRING
  })

  Initiator.associate = function(models) {
    // associations can be defined here
    Initiator.hasMany(models.Project)
  };
  return Initiator;
};