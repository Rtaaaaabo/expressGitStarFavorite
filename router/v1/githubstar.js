const express = require("express");
const router = express.Router();
const db = require("../../models/db");

router.get("/test", (req, res) => {
  res.json({
    message: "This is user api"
  });
});

module.exports = router;
