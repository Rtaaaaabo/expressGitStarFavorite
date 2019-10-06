const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/test", (req, res) => {
  db.any("SELECT * from api_github_star")
    .then(data => {
      console.log("test: ", data);
      res.send("こんにちは！");
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/test", (req, res) => {
  db.any("SELECT * from api_github_star")
    .then(data => {
      console.log("test: ", data);
      res.send("こんにちは！");
    })
    .catch(error => {
      console.log(error);
    });
});
