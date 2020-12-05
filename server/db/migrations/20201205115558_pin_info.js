
exports.up = function(knex) {
  return knex.schema.createTable('pin_info', table => {
    table.increments('id')
    table.integer('pin_id')
    table.string('song')
    table.string('artist')
    table.string('album')
    table.string('username')
    table.string('spotify_link')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pin_info')
};
