exports.seed = (knex) => {
    // Deletes ALL existing entries
  return knex('pins').del()
    .then(() => {
      // Inserts seed entries
      return knex('pins').insert([{
        id: 1,
        song_title: 'Drop the beat down',
        song_artist: 'Return of the Macc',
        song_album: 'Go away beatles',
        username: 'Spotify',
        lat: '',
        lon: '',
        time_date: ''
      },
      {
        id: 2,
        song_title: 'Hey Mama',
        song_artist: 'Black eyed peas',
        song_album: 'Where is the love',
        username: 'Anna',
        lat: '',
        lon: '',
        time_date: ''
      }])
    })
}