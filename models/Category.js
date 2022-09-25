// import sequelize library
const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// init "Category" model by extending off "Model" class
class Category extends Model {}

Category.init(
  {
    // defining columns for Category model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
