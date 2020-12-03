exports.up = function(knex) {
  return knex.schema.createTable('pins', table => {
    table.increments('id')
    table.string('song_title')
    table.string('song_artist')
    table.string('song_album')
    table.string('username')
    table.string('lat')
    table.string('lon')
    table.string('time_date')
  })
  
}

exports.down = function(knex) {
  return knex.schema.dropTable('pins')
}
