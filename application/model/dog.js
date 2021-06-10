const { DataTypes } = require('sequelize');

const Model = require('./baseModel');

class Dog extends Model {
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
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // possuiDeficiencia: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        // },
        // cuidadosEspeciais: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        // },
        // corPelagem: DataTypes.STRING,
        sexo: DataTypes.STRING,
        idade: DataTypes.STRING,
        castrado: DataTypes.STRING,
        teste: DataTypes.STRING,
        vacinas: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'dogs',
      },
    );
  }
}

module.exports = Dog;