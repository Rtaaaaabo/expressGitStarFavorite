'use strict';

const Bookshelf = require('../bookshelf');
const Promise = require('bluebird');

const Favarite = Bookshelf.Model.extend({
    tableName: 'favarite'
}, {
});

module.exports = Favarite;