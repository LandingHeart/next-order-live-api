const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const categoryController = require("../controllers/category.controller");
const comboController = require("../controllers/combo.controller");
const invoiceController = require("../controllers/invoice.controller");
const menuController = require("../controllers/menu.controller");

router.get("/employee", employeeController.findAll);
router.post("/employee/create", employeeController.create);

router.get("/category", categoryController.findAll);
router.post("/category/create", categoryController.create);

router.get("/combo", comboController.findAll);
router.post("/combo/create", comboController.create);

router.get("/invoice", invoiceController.findAll);
router.post("/invoice/create", invoiceController.create);

router.get("/menu", menuController.findAll);
router.post("/menu/create", menuController.create);

module.exports = router;
