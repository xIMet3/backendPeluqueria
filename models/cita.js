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
         foreignKey: "cita_estado_id"
       });

       Cita.belongsTo(models.Empleado, {
        foreignKey: "empleado_id"
       });
     }
  }
  Cita.init({
    usuario_id: DataTypes.INTEGER,
    empleado_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    comentario: DataTypes.STRING,
    servicio_id: DataTypes.INTEGER,
    cita_estado_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cita',
    tableName: 'Citas',
    timestamps: false,
  });
  return Cita;
};