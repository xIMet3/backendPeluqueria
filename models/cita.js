'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    
    static associate(models) {
      Cita.belongsTo(models.Usuario, {
        foreignKey: "usuario_id"
      });

      Cita.belongsTo(models.Servicio, {
        foreignKey: "servicio_id"
      });

      Cita.belongsTo(models.Cita_estado, {
        foreignKey: "estado_cita"
      });
    }
  }
  Cita.init({
    usuario_id: DataTypes.INTEGER,
    empleado_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    comentario: DataTypes.STRING,
    servicio_id: DataTypes.INTEGER,
    cita_estado_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};