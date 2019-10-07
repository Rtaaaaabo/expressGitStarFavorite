const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const router = require("./router/v1");
const db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v3", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// app.get("/api/v3/", (req, res) => {
//   res.json({
//     message: "こんにちは！"
//   });
// });

// app.get("/test", (req, res) => {
//   db.any("SELECT * from api_github_star")
//     .then(data => {
//       console.log("test: ", data);
//       res.send("こんにちは！");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });
