const express = require("express");
const router = express.Router();

const employeeController = require("../../controllers/employee.controller");
// const categoryController = require("../controllers/category.controller");
// const comboController = require("../controllers/combo.controller");
// const invoiceController = require("../controllers/invoice.controller");
// const menuController = require("../controllers/menu.controller");

router.get("/employee", employeeController.findAll);
router.post("/employee/create", employeeController.create);

module.exports = router;
