'use strict';
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD, {
  host:DB_HOST,
  dialect:'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log('Conectado')
})
.catch(err => {
  console.log('No se conecto')
});


 module.exports = sequelize;
