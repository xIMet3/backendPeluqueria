'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicio extends Model {
    
    static associate(models) {
      Servicio.belongsTo(models.Cita, {
        foreignKey: "cita_id",
      });
    }
  }
  Servicio.init({
    nombre_servicio: DataTypes.STRING,
    precio_servicio: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Servicio',
  });
  return Servicio;
};