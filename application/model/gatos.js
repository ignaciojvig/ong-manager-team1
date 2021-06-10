const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Gatos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        possuiDeficiencia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cuidadosEspeciais: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        corPelagem: {
          type: DataTypes.STRING,
          allowNull: false,
      },
        sexo: {
          type: DataTypes.STRING,
          allowNull: false,
      },
        idade: {
          type: DataTypes.STRING,
          allowNull: false,
      },
        castrado: {
          type: DataTypes.STRING,
          allowNull: false,
      },
        teste: {
          type: DataTypes.STRING,
          allowNull: false,
      },
        vacinas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'gatos',
      },
    );
  }
}

module.exports = Gatos;