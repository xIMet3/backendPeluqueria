"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Usuarios", [
      {
        id: 1,
        nombre: "Ximo",
        apellido: "Ruiz",
        email: "ximo@mail.com",
        contraseña: bcrypt.hashSync("admin123", 6),
        telefono: "622542299",
        rol_id: 1,
        codigo_postal: 46900
      },

      {
        id: 2,
        nombre: "Cristian",
        apellido: "Johnson",
        email: "johnson@mail.com",
        contraseña: bcrypt.hashSync("admin123", 6),
        telefono: "677665556",
        rol_id: 2,
        codigo_postal: 46900
      }
    ],{}
    );
  },

  async down(queryInterface, Sequelize) {
  },
};
