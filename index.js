const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const router = require("./router/v1");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
