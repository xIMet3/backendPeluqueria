'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita_estado extends Model {
    
    static associate(models) {
      Cita_estado.hasOne(models.Cita, {
        foreignKey: "cita_estado_id"
      });
    }
  }
  Cita_estado.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_cita_estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita_estado',
    timestamps: false,
  });
  return Cita_estado;
  
};