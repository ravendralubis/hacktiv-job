'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Company extends Model {}

  Company.init({
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    job_position: DataTypes.STRING,
    salary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company'
  })
  // const Company = sequelize.define('Company', {
  //   name: DataTypes.STRING,
  //   deskripsi: DataTypes.STRING,
  //   job_position: DataTypes.STRING,
  //   salary: DataTypes.STRING
  // }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.belongsToMany(models.Applicant, {through: 'applicantcompany'})
  };
  return Company;
};