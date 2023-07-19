'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {

    static associate(models) {
      Rol.hasMany(models.Usuario, {
        foreignKey: "rol_id",
      });
    }
  }
  Rol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    timestamps: false,
  });
  return Rol;
};