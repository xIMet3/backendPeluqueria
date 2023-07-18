'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        required: true
      },
      contraseña: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER,
        unique: true
      },
      rol_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Rols",
          key: "id",
        },
      },
      codigo_postal: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};