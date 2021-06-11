'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dogs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dogs');
  }
};