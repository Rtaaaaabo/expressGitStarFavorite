const Bookshelf = require('../bookshelf');
const Favarite = require('../models/favarite');
const Promise = require('bluebird');

const FavariteCollection = Bookshelf.Collection.extend({
    model: Favarite,
}, {
    getList: function() {
        return this()
        .fetch()
        .then(function(collection) {
            return collection.toJSON();
        })
        .catch(function(error) {
            throw error;
        });
    }
});

module.exports = FavariteCollection;