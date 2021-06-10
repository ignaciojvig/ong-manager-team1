module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('gatos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        possuiDeficiencia: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        cuidadosEspeciais: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        corPelagem: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sexo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        idade: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        castrado: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        teste: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        vacinas: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cat_image: {
            type: Sequelize.STRING,
            allowNull: false,
        }

    }),

    down: async (queryInterface) => queryInterface.dropTable('gatos'),
};