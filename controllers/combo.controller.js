const Combo = require("../models/index").combo;

const findAll = (req, res) => {
  Combo.findAll().then((data) => res.send(data));
};

const create = (req, res) => {
  const newEmpoyee = {
    combo_name: req.body.combo_name,
    combo_img: req.body.combo_img,
    combo_price: req.body.combo_price,
    combo_status: req.body.combo_status,
    last_edit_date: req.body.last_edit_date,
  };

  Combo.create(newEmpoyee)
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
