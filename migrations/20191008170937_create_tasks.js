
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('favarite', (favarite) => {
          favarite.increments('id').primary();
          favarite.string('repository_name');
          favarite.string('url');
          favarite.string('description');
          favarite.string('language');
          favarite.string('owner_avator_url');
          favarite.string('owner_login_name');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('favarite')
    ])
};
