const Menu = require("../models/index").menu;

const findAll = (req, res) => {
  Menu.findAll().then((data) => res.send(data));
};

const create = (req, res) => {
  const newEmpoyee = {
    item_name: req.body.item_name,
    item_img: req.body.item_img,
    category_type: req.body.category_type,
    price: req.body.price,
    item_status: req.body.item_status,
    last_edit_date: req.body.last_edit_date,
  };

  Menu.create(newEmpoyee)
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
