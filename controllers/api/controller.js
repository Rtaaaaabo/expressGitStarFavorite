"use strict";

const Promise = require("bluebird");
const Favorite = require("../../models/favotite");
const FavoriteCollection = require("../../collections/favoriteCollection");

function getFavorite(req, res) {
  const id = req.params.id;
  Favorite.forge({ id: id })
    .fetch({
      columns: [
        "repository_name",
        "url",
        "description",
        "language",
        "owner_avator_url",
        "owner_login_name"
      ]
    })
    .then(favorite => {
      res.json(favorite.toJSON());
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}

function getFavorites(req, res) {
  FavoriteCollection.getList()
    .then(favoites => {
      res.json(favoites);
    })
    .catch(error => {
      res.status(500).json({ msg: error.message });
    });
}
