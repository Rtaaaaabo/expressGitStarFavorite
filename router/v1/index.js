const express = require("express");
const router = express.Router();

router.use("/githubstar", require("./githubstar.js"));

module.exports = router;
