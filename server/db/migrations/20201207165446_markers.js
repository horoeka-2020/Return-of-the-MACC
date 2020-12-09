
exports.up = function(knex) {
    return knex.schema.createTable('markers', table => {
        table.increments('id')
        table.string('song')
        table.string('artist')
        table.string('album')
        table.string('username')
        table.string('spotify_link')
        table.real('lat')
        table.real('lng')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('markers')
}
