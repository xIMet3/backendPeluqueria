'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    
    static associate(models) {
      Empleado.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
      });
    }
  }
  Empleado.init({
    usuario_id: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empleado',
    timestamps: false,
  });
  return Empleado;
};