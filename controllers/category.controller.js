const Category = require("../models/index").category;

const findAll = (req, res) => {
  Category.findAll().then((data) => res.send(data));
};

const create = (req, res) => {
  const newEmpoyee = {
    category_name: req.body.category_name,
    categor_type: req.body.categor_type,
    edit_date: req.body.edit_date,
    category_ranking: req.body.category_ranking,
  };

  Category.create(newEmpoyee)
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
