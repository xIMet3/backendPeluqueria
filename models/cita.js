'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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