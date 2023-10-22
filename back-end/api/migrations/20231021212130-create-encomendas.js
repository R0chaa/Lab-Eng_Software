'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Encomendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_recebimento: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      id_morador: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Moradores',key: 'id'}
      },
      id_funcionario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Funcionarios',key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Encomendas');
  }
};