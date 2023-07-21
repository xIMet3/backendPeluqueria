'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cita_estados",
      [
        {
          id: 1,
          nombre_cita_estado: "Pendiente"
        },
        {
          id: 2,
          nombre_cita_estado: "Cancelada"
        },
        {
          id: 3,
          nombre_cita_estado: "Realizada"
        }
      ],
      {}
    );
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
