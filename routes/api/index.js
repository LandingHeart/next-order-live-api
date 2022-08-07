const express = require("express");
var router = express.Router();
router.use("/", require("./employee"));

module.exports = router;
