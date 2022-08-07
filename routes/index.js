const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const categoryController = require("../controllers/category.controller");
const comboController = require("../controllers/combo.controller");
const invoiceController = require("../controllers/invoice.controller");
const menuController = require("../controllers/menu.controller");

router.get("/api/employee", employeeController.findAll);
router.post("/api/employee/create", employeeController.create);

router.get("/api/category", categoryController.findAll);
router.post("/api/category/create", categoryController.create);

router.get("/api/combo", comboController.findAll);
router.post("/api/combo/create", comboController.create);

router.get("/api/invoice", invoiceController.findAll);
router.post("/api/invoice/create", invoiceController.create);

router.get("/api/menu", menuController.findAll);
router.post("/api/menu/create", menuController.create);

module.exports = router;
