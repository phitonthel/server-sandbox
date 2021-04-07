'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let payload = [
      {
        name: 'phitonthel',
        number: 55.555,
        message1: 'test1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('Databases', payload, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Databases', null, {});
  }
};
