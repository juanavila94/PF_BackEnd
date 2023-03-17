'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Companies', [
      {
        name: 'CocaCola',
        cuit: '123456789',
        industry: 'Alimentacion',
        location: 'Buenos Aires',
        numberEmployees: 10,
        tel: '990987123',
        email: 'empresa@gmail.com',
        authorized: true,
        InformationId: 1
      

      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
