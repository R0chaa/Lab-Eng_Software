'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Localidades.belongsTo(models.Condominios, {foreignKey: 'id_condominio'});
      Localidades.hasMany(models.Reservas, { foreignKey: 'id_localidade' })
    }
  }
  Localidades.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localidades',
  });
  return Localidades;
};