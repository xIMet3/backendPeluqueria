'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicio extends Model {
    
    static associate(models) {
      Servicio.hasMany(models.Cita, {
        foreignKey: "servicio_id",
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
    timestamps: false,
  });
  return Servicio;
};