'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condominios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Condominios.hasMany(models.Moradores, { foreignKey: 'id_condominio' })
      Condominios.hasMany(models.Funcionarios, { foreignKey: 'id_condominio' })
      Condominios.hasMany(models.Localidades, { foreignKey: 'id_condominio' })
    }
  }
  Condominios.init({
    cnpj: DataTypes.STRING(14),
    nome: DataTypes.STRING(128)
  }, {
    sequelize,
    modelName: 'Condominios',
  });
  return Condominios;
};