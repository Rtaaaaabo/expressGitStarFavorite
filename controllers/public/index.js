"use strict";
const Promise = require("bluebird");
const FavoriteCollection = require("../../collections/favariteCollection");

function getIndex(req, res) {
  console.log("最初のところ");
  FavoriteCollection.getList()
    .then(favorite => {
      console.log("ここは？");
      res.json(favorite);
    })
    .catch(error => {
      console.log("ここにも来ていない？");
      res.status(500).json({ msg: error.message });
    });
}

module.exports = {
  getIndex: getIndex
};
