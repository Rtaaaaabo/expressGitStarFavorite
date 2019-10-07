// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const router = express.Router();
// const router = require("./router/v1");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/api/v1", router);

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

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
