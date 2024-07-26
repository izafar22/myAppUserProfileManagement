const { DataTypes } = require('sequelize');
const  sequelize  = require('./db.js');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  indexes: [
    {
      unique: true,
      fields: ['name']
    }
  ]
});

module.exports = Role;