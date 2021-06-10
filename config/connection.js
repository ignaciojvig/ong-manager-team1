const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Dog = require('../application/model/dog')

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Dog.init(connection);

module.exports = connection;
