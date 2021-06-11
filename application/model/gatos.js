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
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tipo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        possuiDeficiencia: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cuidadosEspeciais: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        corPelagem: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        sexo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        idade:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        castrado: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        teste:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        vacinas: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cat_image: {
          type: DataTypes.STRING,
          allowNull: true,
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
