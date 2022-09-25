// import sequelize library
const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection');

// init "ProductTag" model by extending from "Model" class
class ProductTag extends Model {}

ProductTag.init(
  {
    // defining columns for "ProductTag" model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
