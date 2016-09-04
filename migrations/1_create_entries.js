exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('journal', table => {
      table.increments('uid').primary();
      table.string('title');
      table.string('id');
      table.string('excerpt');
      table.string('content');
      table.string('headerImage');
      table.dateTime('created');
      table.dateTime('updated');
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
