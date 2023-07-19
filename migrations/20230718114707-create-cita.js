'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Citas', {
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
          key: "id"
        },

      },
      empleado_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Empleados",
          key: "id"
        }
      },
      fecha: {
        type: Sequelize.DATE,
        unique: true,
        required: true
      },
      comentario: {
        type: Sequelize.STRING
      },
      servicio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Servicios",
          key: "id",
        },
      },
      cita_estado_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cita_estados",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Citas');
  }
};