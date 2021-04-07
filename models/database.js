'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Database extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Database.init({
    name: DataTypes.STRING,
    number: DataTypes.DOUBLE,
    message1: DataTypes.STRING,
    message2: DataTypes.STRING,
    message3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Database',
  });
  return Database;
};