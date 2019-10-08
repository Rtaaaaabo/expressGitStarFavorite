"use strict";

const Bookshelf = require("../bookshelf");
const Promise = require("bluebird");

const Favarite = Bookshelf.Model.extend(
  {
    tableName: "favorite"
  },
  {}
);

module.exports = Favarite;
