const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Veterinario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        crmv: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'veterinarios',
      },
    );
  }
}

module.exports = Veterinario;
