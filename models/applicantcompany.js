'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class applicantcompany extends Model {}

  applicantcompany.init({
    applicantId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'applicantcompany'
  })
  
  applicantcompany.associate = function(models) {
    // associations can be defined here
  };
  return applicantcompany;
};