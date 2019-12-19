'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Project extends Model {

  }

  Project.init({
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    deadline: DataTypes.STRING,
    qualifications: DataTypes.STRING,
    maxCollaborator: DataTypes.INTEGER,
    currentCollaborator: DataTypes.INTEGER,
    InitiatorId: DataTypes.INTEGER
  }, {sequelize})

  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.Seeker, {through: models.ProjectCollaborator})
    Project.belongsTo(models.Initiator)
  };
  return Project;
};