'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Moradores', [{
      email: 'joao@email.com',
      senha: 'senha123',
      nome_completo: 'João Silva',
      residencia: 'Apartamento 101',
      telefone: '123-456-7890',
      id_condominio: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'maria@email.com',
      senha: 'senha456',
      nome_completo: 'Maria Santos',
      residencia: 'Apartamento 202',
      telefone: '987-654-3210',
      id_condominio: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'carlos@email.com',
      senha: 'senha789',
      nome_completo: 'Carlos Souza',
      residencia: 'Casa 1',
      telefone: '111-222-3333',
      id_condominio: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'ana@email.com',
      senha: 'senhaABC',
      nome_completo: 'Ana Pereira',
      residencia: 'Apartamento 301',
      telefone: '555-666-7777',
      id_condominio: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'pedro@email.com',
      senha: 'senhaXYZ',
      nome_completo: 'Pedro Oliveira',
      residencia: 'Casa 2',
      telefone: '999-888-7777',
      id_condominio: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'lucia@email.com',
      senha: 'senha123',
      nome_completo: 'Lucia Ferreira',
      residencia: 'Apartamento 401',
      telefone: '444-333-2222',
      id_condominio: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'andre@email.com',
      senha: 'senha456',
      nome_completo: 'André Santos',
      residencia: 'Casa 3',
      telefone: '777-888-9999',
      id_condominio: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'claudia@email.com',
      senha: 'senha789',
      nome_completo: 'Cláudia Souza',
      residencia: 'Apartamento 501',
      telefone: '222-333-4444',
      id_condominio: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'rafael@email.com',
      senha: 'senhaABC',
      nome_completo: 'Rafael Pereira',
      residencia: 'Casa 4',
      telefone: '888-777-6666',
      id_condominio: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'julia@email.com',
      senha: 'senhaXYZ',
      nome_completo: 'Júlia Oliveira',
      residencia: 'Apartamento 601',
      telefone: '333-222-1111',
      id_condominio: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Moradores', null, {});
  }
};
