'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Localidades', [{
        nome: 'Piscina',
        id_condominio: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Academia',
        id_condominio: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Salão de Festas',
        id_condominio: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Playground',
        id_condominio: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Área de Churrasco',
        id_condominio: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Quadra de Tênis',
        id_condominio: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Parque Infantil',
        id_condominio: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Salão de Jogos',
        id_condominio: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Sala de Conferências',
        id_condominio: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jardim Interno',
        id_condominio: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Localidades', null, {});
  }
};
