
exports.up = function(knex) {
  return knex.schema.createTable('pins', table => {
    table.increments('id')
    table.string('image')
    table.integer('lat')
    table.integer('lng')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pins')
};
