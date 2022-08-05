"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // define association/relation here
    }
  }
  Menu.init(
    {
      item_name: DataTypes.STRING,
      item_img: DataTypes.STRING,
      category_type: DataTypes.STRING,
      price: DataTypes.STRING,
      item_status: DataTypes.STRING,
      last_edit_date: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "menu",
    }
  );
  return Menu;
};
