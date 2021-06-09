module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('ongs', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING(4000),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  })
  .then(() => { 
    return async (queryInterface, Sequelize) => queryInterface.addColumn(
    'gatinhos', // name of Source model
    'ong_id', // name of the key we're adding 
    {
      type: Sequelize.UUID,
      references: {
        model: 'ongs', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  )}),

  down: async (queryInterface) => queryInterface.dropTable('ongs'),
};
