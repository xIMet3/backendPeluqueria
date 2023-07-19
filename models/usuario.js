"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {

      Usuario.belongsTo(models.Rol, {
        foreignKey: "rol_id",
      });

      Usuario.hasMany(models.Cita, {
        foreignKey: "usuario_id",
      });

      Usuario.hasOne(models.Empleado, {
        foreignKey: "usuario_id",
      });
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING,
      telefono: DataTypes.INTEGER,
      codigo_postal: DataTypes.INTEGER,
      contraseña: DataTypes.STRING,
      rol_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Usuario",
      timestamps: false,
    }
  );
  return Usuario;
};
