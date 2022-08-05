"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association/relation here
    }
  }
  Employee.init(
    {
      name: DataTypes.STRING,
      account: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      accountnumber: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "employee",
    }
  );
  return Employee;
};
