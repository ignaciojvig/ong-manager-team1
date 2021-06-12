const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Veterinario = require('../application/model/veterinario');
const Gatos = require('../application/model/gatos');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Veterinario.init(connection);
Gatos.init(connection);

module.exports = connection;
