// import sequelize library
const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// init "Tag" model by extending off "Model" class
class Tag extends Model {}

Tag.init(
  {
    // defining columns for "Tag" model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
