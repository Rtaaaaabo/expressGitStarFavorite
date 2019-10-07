const express = require("express");
const router = express.Router();

router.use("/fevorite", require("./favorite/index.js"));

module.exports = router;
