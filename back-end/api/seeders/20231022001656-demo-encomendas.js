'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Encomendas', [{
        data_recebimento: new Date(),
        descricao: 'Pacote pequeno',
        id_morador: 1,
        id_funcionario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Entrega urgente',
        id_morador: 2,
        id_funcionario: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Encomenda internacional',
        id_morador: 3,
        id_funcionario: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Pacote de presente',
        id_morador: 4,
        id_funcionario: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Documentos importantes',
        id_morador: 5,
        id_funcionario: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Pacote frágil',
        id_morador: 6,
        id_funcionario: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Livros',
        id_morador: 7,
        id_funcionario: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Material de escritório',
        id_morador: 8,
        id_funcionario: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Eletrônicos',
        id_morador: 9,
        id_funcionario: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_recebimento: new Date(),
        descricao: 'Comida perecível',
        id_morador: 10,
        id_funcionario: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Encomendas', null, {});
  }
};
