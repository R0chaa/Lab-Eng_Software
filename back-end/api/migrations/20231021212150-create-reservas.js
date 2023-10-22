'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dia: {
        type: Sequelize.DATEONLY
      },
      horario: {
        type: Sequelize.TIME
      },
      id_morador: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Moradores',key: 'id'}
      },
      id_localidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Localidades',key: 'id'}
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
    await queryInterface.dropTable('Reservas');
  }
};