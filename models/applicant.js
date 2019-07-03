'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Applicant extends Model {

  }
  Applicant.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    job_wanted: DataTypes.STRING,
    salary_wanted: DataTypes.STRING
  },  {
    sequelize,
    modelName: "Applicant"
  })
  // const Applicant = sequelize.define('Applicant', {
  //   name: DataTypes.STRING,
  //   age: DataTypes.INTEGER,
  //   job_wanted: DataTypes.STRING,
  //   salary_wanted: DataTypes.STRING
  // }, {});
  Applicant.associate = function(models) {
    // associations can be defined here
    Applicant.belongsToMany(models.Company, {through: 'applicantcompany'})
  };
  return Applicant;
};