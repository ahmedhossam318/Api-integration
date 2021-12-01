const { Sequelize } = require('sequelize');


const sequelize =  new Sequelize('postgres://postgres:01121544748@localhost:5432/doctor')
module.exports = sequelize