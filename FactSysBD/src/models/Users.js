const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Users', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user: {
        type: Sequelize.TEXT
      },
      password: {
          type: Sequelize.STRING
      }
    });
  };