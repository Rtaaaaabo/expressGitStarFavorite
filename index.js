const express = require("express");
const app = express();
const db = require("db");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  db.any("SELECT * from api_github_star")
    .then(data => {
      console.log(data);
      res.send("こんにちは！");
    })
    .catch(error => {
      console.log(error);
    });
});
