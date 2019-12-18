'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Seeker = sequelize.define('Seeker', {
  //   name: DataTypes.STRING,
  //   rating: DataTypes.INTEGER,
  //   skills: DataTypes.STRING,
  //   experience: DataTypes.INTEGER,
  //   totalProject: DataTypes.INTEGER
  // }, {});

  class Seeker extends sequelize.Sequelize.Model {}
  Seeker.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    skills: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    totalProject: DataTypes.INTEGER,
    email : DataTypes.STRING,
    password : DataTypes.STRING
  }, {sequelize})
  
  Seeker.associate = function(models) {
    // associations can be defined here
    Seeker.belongsToMany(models.Project, {through:models.ProjectCollaborator})
  };
  return Seeker;
};