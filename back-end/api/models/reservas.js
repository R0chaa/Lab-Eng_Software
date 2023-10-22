'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservas.belongsTo(models.Localidades, { foreignKey: 'id_localidade' });
      Reservas.belongsTo(models.Moradores, { foreignKey: 'id_morador' });
    }
  }
  Reservas.init({
    dia: DataTypes.DATEONLY,
    horario: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};