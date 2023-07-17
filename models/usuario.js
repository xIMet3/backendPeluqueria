'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
   
    static associate(models) {
      Usuario.belongsTo(models.Rol, {
        foreignKey: "rol_id",
      });

      Usuario.hasMany(models.Cita, {
        foreignKey: "peluquero_id",
        as: "peluquero",
      });

      Usuario.hasMany(models.Cita, {
        foreignKey: "usuario_id",
        as: "usuario",
      });

      Usuario.hasOne(models.Empleado, {
        foreignKey: "usuario_id",
        as: "peluquero",
      });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    rol_id: DataTypes.INTEGER,
    codigo_postal: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};