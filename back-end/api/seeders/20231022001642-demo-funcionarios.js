'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Funcionarios', [{
      email: 'funcionario1@email.com',
      senha: 'senha123',
      nome_completo: 'Funcionário 1',
      CPF: '12345678901',
      telefone: '111-222-3333',
      id_condominio: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario2@email.com',
      senha: 'senha456',
      nome_completo: 'Funcionário 2',
      CPF: '23456789012',
      telefone: '222-333-4444',
      id_condominio: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario3@email.com',
      senha: 'senha789',
      nome_completo: 'Funcionário 3',
      CPF: '34567890123',
      telefone: '333-444-5555',
      id_condominio: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario4@email.com',
      senha: 'senhaABC',
      nome_completo: 'Funcionário 4',
      CPF: '45678901234',
      telefone: '444-555-6666',
      id_condominio: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario5@email.com',
      senha: 'senhaXYZ',
      nome_completo: 'Funcionário 5',
      CPF: '56789012345',
      telefone: '555-666-7777',
      id_condominio: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario6@email.com',
      senha: 'senha123',
      nome_completo: 'Funcionário 6',
      CPF: '67890123456',
      telefone: '666-777-8888',
      id_condominio: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario7@email.com',
      senha: 'senha456',
      nome_completo: 'Funcionário 7',
      CPF: '78901234567',
      telefone: '777-888-9999',
      id_condominio: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario8@email.com',
      senha: 'senha789',
      nome_completo: 'Funcionário 8',
      CPF: '89012345678',
      telefone: '888-999-0000',
      id_condominio: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario9@email.com',
      senha: 'senhaABC',
      nome_completo: 'Funcionário 9',
      CPF: '90123456789',
      telefone: '999-000-1111',
      id_condominio: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'funcionario10@email.com',
      senha: 'senhaXYZ',
      nome_completo: 'Funcionário 10',
      CPF: '01234567890',
      telefone: '000-111-2222',
      id_condominio: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Funcionarios', null, {});
  }
};
