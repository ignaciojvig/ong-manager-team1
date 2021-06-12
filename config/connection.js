const { Sequelize } = require('sequelize');
const dbConfiguration = require('./database.config');
const Ong = require('../application/model/ong');
const Veterinario = require('../application/model/veterinario');
const Dog = require('../application/model/dog')
const Gatos = require('../application/model/gatos');
const User = require("../application/model/user");

const connection = new Sequelize(dbConfiguration);
Ong.init(connection);
Veterinario.init(connection);
Dog.init(connection);
Gatos.init(connection);
User.init(connection);

module.exports = connection;
