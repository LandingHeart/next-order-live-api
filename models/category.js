"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association/relation here
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      categor_type: DataTypes.STRING,
      edit_date: DataTypes.STRING,
      category_ranking: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "category",
    }
  );
  return Category;
};
