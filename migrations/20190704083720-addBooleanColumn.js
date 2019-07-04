'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.addColumn('Companies', 'isCompany', Sequelize.BOOLEAN);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.removeColumn('Companies', 'isCompany');
  }
};
