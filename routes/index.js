const express = require("express");
var router = express.Router();

router.use("/api", require("./api"));

module.exports = router;

// router.get("/api/category", categoryController.findAll);
// router.post("/api/category/create", categoryController.create);

// router.get("/api/combo", comboController.findAll);
// router.post("/api/combo/create", comboController.create);

// router.get("/api/invoice", invoiceController.findAll);
// router.post("/api/invoice/create", invoiceController.create);

// router.get("/api/menu", menuController.findAll);
// router.post("/api/menu/create", menuController.create);
