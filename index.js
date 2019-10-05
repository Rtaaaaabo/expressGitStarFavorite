const express = require("express");
const app = express();
const pg = require("pg");

const pool = pg.Pool({
  database: "githubstar",
  user: "taku",
  password: "",
  host: "localhost",
  port: 5432
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("こんにちは！");
});
