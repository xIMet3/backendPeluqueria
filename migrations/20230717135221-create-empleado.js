'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empleados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id",
          where: {
            role_id: 2,
          },
        },

      },
      estado: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empleados');
  }
};