const Invoice = require("../models/index").invoice;

const findAll = (req, res) => {
  Invoice.findAll().then((data) => res.send(data));
};

const create = (req, res) => {
  const newEmpoyee = {
    invoice_number: req.body.invoice_number,
    invoice_status: req.body.invoice_status,
    invoice_receiver: req.body.invoice_receiver,
    receiver_phonenumber: req.body.receiver_phonenumber,
    receiver_address: req.body.receiver_address,
    invoice_order_time: req.body.invoice_order_time,
    invoice_total: req.body.invoice_total,
  };

  Invoice.create(newEmpoyee)
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
