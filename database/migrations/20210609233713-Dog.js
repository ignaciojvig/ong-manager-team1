'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dogs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      possuiDeficiencia: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      cuidadosEspeciais: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      corPelagem: Sequelize.STRING,
      sexo: Sequelize.STRING,
      idade: Sequelize.STRING,
      castrado: Sequelize.STRING,
      teste: Sequelize.STRING,
      vacinas: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dogs');
  }
};