'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Encomendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Encomendas.belongsTo(models.Moradores, { foreignKey: 'id_morador' });
      Encomendas.belongsTo(models.Funcionarios, { foreignKey: 'id_funcionario' });

    }
  }
  Encomendas.init({
    data_recebimento: DataTypes.DATE,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Encomendas',
  });
  return Encomendas;
};