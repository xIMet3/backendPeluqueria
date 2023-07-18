'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita_estado extends Model {
    
    static associate(models) {
      Cita_estado.hasMany(models.Cita, {
        foreignKey: "estado_cita",
        as: "estado_cita",
      });
    }
  }
  Cita_estado.init({
    concertada: DataTypes.STRING,
    anulada: DataTypes.STRING,
    realizada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita_estado',
  });
  return Cita_estado;
};