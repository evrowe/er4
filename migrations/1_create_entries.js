exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('journal', table => {
      table.increments('uid').primary();
      table.string('title');
      table.string('id');
      table.string('excerpt');
      table.string('content');
      table.string('headerImage');
      table.string('created'); // will use momentjs to enforce proper formatting
      table.string('updated'); // will use momentjs to enforce proper formatting
      table.string('tags');
      table.string('category');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('journal')
  ]);
};
