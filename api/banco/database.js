const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://root:123456@localhost:5432/postgres', { dialect: 'postgres' })

module.exports = sequelize