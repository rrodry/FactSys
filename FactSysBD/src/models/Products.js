const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Products', {
      price:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      code: {
        type: Sequelize.TEXT
      },
      product: {
          type: Sequelize.STRING
      }
    });
  };