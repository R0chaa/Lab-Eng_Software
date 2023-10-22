'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reservas', [{
      dia: '2023-10-23',
      horario: '09:00:00',
      id_morador: 1,
      id_localidade: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-24',
      horario: '14:30:00',
      id_morador: 2,
      id_localidade: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-25',
      horario: '16:00:00',
      id_morador: 3,
      id_localidade: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-26',
      horario: '10:30:00',
      id_morador: 4,
      id_localidade: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-27',
      horario: '18:00:00',
      id_morador: 5,
      id_localidade: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-28',
      horario: '11:30:00',
      id_morador: 6,
      id_localidade: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-29',
      horario: '15:45:00',
      id_morador: 7,
      id_localidade: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-30',
      horario: '13:00:00',
      id_morador: 8,
      id_localidade: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-10-31',
      horario: '12:15:00',
      id_morador: 9,
      id_localidade: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      dia: '2023-11-01',
      horario: '17:30:00',
      id_morador: 10,
      id_localidade: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservas', null, {});
  }
};
