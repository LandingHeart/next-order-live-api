"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Combo extends Model {
    static associate(models) {
      // define association/relation here
    }
  }
  Combo.init(
    {
      combo_name: DataTypes.STRING,
      combo_img: DataTypes.STRING,
      combo_price: DataTypes.STRING,
      combo_status: DataTypes.STRING,
      last_edit_date: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "combo",
    }
  );
  return Combo;
};
