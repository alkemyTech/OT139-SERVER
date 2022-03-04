'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../dataBase/DataBase');
module.exports = sequelize.define('user', {
  id:
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  firstName:{type: Sequelize.STRING},
  lastName:{type: Sequelize.STRING},
  email:{type: Sequelize.STRING},
  password:{type:Sequelize.STRING},
  tableName: 'user'
},{
  tableName: 'user',
  freezeTableName: true
});



