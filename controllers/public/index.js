"use strict";
const Promise = require('bluebird');
const FavariteCollection = require('../../collections/favariteCollection');

function getIndex(req, res) {
  FavariteCollection.getList()
  .then((favarite) => {
    res.json(favarite);
  })
  .catch(error => {
    res.status(500).json({msg: error.message});
  })
}

module.exports = {
  getIndex: getIndex
};
