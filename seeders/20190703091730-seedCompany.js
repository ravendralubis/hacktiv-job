'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.bulkInsert('Companies', [
      {
        name: 'PT. Intan Kayu',
        deskripsi: 'Berpengalaman di berbagai bidang dsb',
        job_position: 'Full Stack Javascript',
        salary: '17000000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT. Jaya Reksa Dana Siapa',
        deskripsi: 'Professional di bidangnya',
        job_position: 'Senior Back End',
        salary: 19000000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
