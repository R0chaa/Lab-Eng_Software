'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moradores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Moradores.belongsTo(models.Condominios, {foreignKey: 'id_condominio'});
      Moradores.hasMany(models.Reservas, { foreignKey: 'id_morador' });
      Moradores.hasMany(models.Encomendas, { foreignKey: 'id_morador' });
      Moradores.hasMany(models.Forums, { foreignKey: 'id_morador' });
    }
  }
  Moradores.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome_completo: DataTypes.STRING,
    residencia: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Moradores',
  });
  return Moradores;
};