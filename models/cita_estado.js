'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita_estado extends Model {
    
    // static associate(models) {
    //   Cita_estado.hasMany(models.Cita, {
    //     foreignKey: "estado_cita"
    //   });
    // }
  }
  Cita_estado.init({
    nombre_cita_estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita_estado',
    timestamps: false,
  });
  return Cita_estado;
  
};