const express = require("express");
const router = express.Router();

const employeeController = require("../../controllers/employee.controller");

router.get("/api/employee", employeeController.findAll);
router.post("/api/employee/create", employeeController.create);

module.exports = router;
