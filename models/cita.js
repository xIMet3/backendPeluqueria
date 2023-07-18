'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    
    static associate(models) {
      Cita.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });

      Cita.belongsTo(models.Servicio, {
        foreignKey: "servicio_id",
        as: "servicio",
      });

      Cita.belongsTo(models.Cita_estado, {
        foreignKey: "estado_cita",
        as: "estado_cita",
      });
    }
  }
  Cita.init({
    usuario_id: DataTypes.INTEGER,
    peluquero_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    comentario: DataTypes.STRING,
    servicio_id: DataTypes.INTEGER,
    estado_cita: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};