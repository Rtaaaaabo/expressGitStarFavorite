const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// Config
const config = require("./config")(process.env.ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const public_index = require("./router/public/index");
app.use("/", public_index);

app.listen(config.port, function() {
  console.log("Example app listening on port " + config.port);
});
