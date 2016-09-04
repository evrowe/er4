const Promise = require('bluebird');

const config = require('./knexfile')[process.env.NODE_ENV];
const knex = require('knex')(config);
const Bookshelf = require('bookshelf')(knex);

// Bookshelf Plugins
// ---------------------------------------------------------------------------

// Fixes issues with circular dependencies
Bookshelf.plugin('registry');

// Database Methods
// ---------------------------------------------------------------------------

exports.migrate = () => {
  return knex.migrate.latest(config);
};

exports.rollback = () => {
  return knex.migrate.rollback(config);
};

exports.seed = () => {
  return knex.seed.run(config);
};

exports.dropTables = () => {
  const tables = [
    'journal'
  ];
  return Promise.each(tables, table => {
    return knex.schema.dropTableIfExists(table);
  });
};

exports.knex = knex;
exports.Bookshelf = Bookshelf;
