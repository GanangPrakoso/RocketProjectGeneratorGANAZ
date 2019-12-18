'use strict';
module.exports = (sequelize, DataTypes) => {
  // const ProjectCollaborator = sequelize.define('ProjectCollaborator', {
  //   ProjectId: DataTypes.INTEGER,
  //   SeekerId: DataTypes.INTEGER,
  //   statusSeeker: DataTypes.INTEGER
  // }, {});

  class ProjectCollaborator extends sequelize.Sequelize.Model { }
  ProjectCollaborator.init({
    ProjectId: DataTypes.INTEGER,
    SeekerId: DataTypes.INTEGER,
    statusSeeker: DataTypes.INTEGER
  }, { sequelize })
  ProjectCollaborator.associate = function (models) {
    // associations can be defined here
  };
  return ProjectCollaborator;
};