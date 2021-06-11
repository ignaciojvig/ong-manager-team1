const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Gatos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        status: DataTypes.STRING,
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        name: DataTypes.STRING,
        possuiDeficiencia: DataTypes.STRING,
        cuidadosEspeciais: DataTypes.STRING,
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
        underscored: false,
        tableName: 'gatos',
      },
    );
  }
}

module.exports = Gatos;