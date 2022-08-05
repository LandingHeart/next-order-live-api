"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      // define association/relation here
    }
  }
  Invoice.init(
    {
      invoice_number: DataTypes.STRING,
      invoice_status: DataTypes.STRING,
      invoice_receiver: DataTypes.STRING,
      receiver_phonenumber: DataTypes.STRING,
      receiver_address: DataTypes.STRING,
      invoice_order_time: DataTypes.DATE,
      invoice_total: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "invoice",
    }
  );
  return Invoice;
};
