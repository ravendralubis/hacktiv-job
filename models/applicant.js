'use strict';
module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define('Applicant', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    job_wanted: DataTypes.STRING,
    salary_wanted: DataTypes.STRING
  }, {});
  Applicant.associate = function(models) {
    // associations can be defined here
  };
  return Applicant;
};