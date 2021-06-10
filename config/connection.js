const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Gatos = require('../application/model/gatos');

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Gatos.init(connection);

module.exports = connection;
