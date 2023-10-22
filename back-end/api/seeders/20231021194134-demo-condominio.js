'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Condominios', [
      {
        cnpj: '11111111111',
        nome: 'Condomínio A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '22222222222',
        nome: 'Condomínio B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '33333333333',
        nome: 'Condomínio C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '44444444444',
        nome: 'Condomínio D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '55555555555',
        nome: 'Condomínio E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '66666666666',
        nome: 'Condomínio F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '77777777777',
        nome: 'Condomínio G',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '88888888888',
        nome: 'Condomínio H',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '99999999999',
        nome: 'Condomínio I',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '00000000000',
        nome: 'Condomínio J',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Condominios', null, {});
  }
};
