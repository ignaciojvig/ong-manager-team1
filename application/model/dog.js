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
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cor: DataTypes.STRING,
        peso: DataTypes.STRING,
        temDeficiencia: DataTypes.BOOLEAN,
        deficiencia: DataTypes.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'animals',
      },
    );
  }
}

module.exports = Dog;
