'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model


  class Applicant extends Model {

  }
  Applicant.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    job_wanted: DataTypes.STRING,
    salary_wanted: DataTypes.STRING,
    password: DataTypes.STRING
  },  {
    sequelize,
    modelName: "Applicant"
  })
  // const _ = require('lodash');
  // const { logger } = require('./utils/logger');
  // const Promise = require('./promise');
  // const debug = logger.debugContext('hooks');

  // const bcrypt = require('bcrypt');
  // const saltRounds = 10;
  // const myPlaintextPassword = 's0/\/\P4$$w0rD';
  // const someOtherPlaintextPassword = 'not_bacon';
  
  hooks: {

  }
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