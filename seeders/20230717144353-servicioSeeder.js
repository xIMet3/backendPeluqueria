'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    "Servicios",
    [
      {
        id: 1,
        nombre_servicio: "Corte cabello",
        precio_servicio: "12€",
        descripcion: "Corte de cabello y degradado."
      }
    ]
   )
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
