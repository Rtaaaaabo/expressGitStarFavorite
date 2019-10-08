
const express = require("express");
const app = express();

// Config
const config = require("./config")(process.env.ENV);

const public_index = require("./router/public/index");
app.use("/", public_index);

// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

app.listen(config.port, function() {
  console.log("Example app listening on port " + config.port);
});
