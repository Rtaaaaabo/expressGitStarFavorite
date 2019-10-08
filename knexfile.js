module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'githubstar',
      user: 'nodeuser',
      password: 'nodeuser'
      // filename: './dev.sqlite3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'favorite'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
