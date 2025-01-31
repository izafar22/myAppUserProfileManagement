const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  indexes: [
  {
    unique: true,
    fields: ['name']
  },
  {
    unique: true,
    fields: ['email']
  },
  {
    fields: ['roleId']
  }]
});

module.exports = User;