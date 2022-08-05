const Employee = require("../models/index").employee;

const findAll = (req, res) => {
  Employee.findAll().then((data) => res.send(data));
};

const create = (req, res) => {
  const newEmpoyee = {
    name: req.body.name,
    account: req.body.account,
    phonenumber: req.body.phonenumber,
    gender: req.body.gender,
    accountnumber: req.body.accountnumber,
    status: req.body.status,
  };

  Employee.create(newEmpoyee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(500).send({
        message: err.message || "err on creating new Empoyee",
      });
    });
};

module.exports = {
  findAll,
  create,
};
