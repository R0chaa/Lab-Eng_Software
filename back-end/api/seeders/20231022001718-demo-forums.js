'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Forums', [{
        data_post: new Date(),
        post: 'Primeira mensagem no fórum',
        id_morador: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Dúvida sobre regras do condomínio',
        id_morador: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Comunicado importante',
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Reclamação sobre barulho',
        id_morador: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Sugestão para melhorias',
        id_morador: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Problema no elevador',
        id_morador: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Aviso sobre manutenção',
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Evento no condomínio',
        id_morador: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Agradecimento à administração',
        id_morador: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_post: new Date(),
        post: 'Discussão sobre segurança',
        id_morador: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Forums', null, {});
  }
};
