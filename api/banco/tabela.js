const Sequelize = require('sequelize');
const database = require('./database');

const Usuario = database.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  confirmarSenha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Usuario;