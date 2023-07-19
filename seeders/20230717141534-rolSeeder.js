"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rols",
      [
        {
          id: 1,
          nombre_rol: "Admin",
        },
        {
          id: 2,
          nombre_rol: "Peluquero",
        },
        {
          id: 3,
          nombre_rol: "Cliente",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
