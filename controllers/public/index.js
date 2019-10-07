"use strict";

function getIndex(req, res) {
  res.send("こんにちは！世界！");
}

module.exports = {
  getIndex: getIndex
};
