'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita_estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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