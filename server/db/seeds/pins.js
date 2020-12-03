exports.seed = (knex) => {
    // Deletes ALL existing entries
  return knex('pins').del()
    .then(() => {
      // Inserts seed entries
      return knex('pins').insert([{
        id: 1,
        song_title: 'Here comes the sun',
        song_artist: 'The Beatles',
        song_album: 'Abbey Road',
        username: 'Caz',
        lat: '',
        lon: '',
        time_date: ''
      },
      {
        id: 2,
        song_title: 'Hey Jude',
        song_artist: 'The Beatles',
        song_album: 'The White Album',
        username: 'Anna',
        lat: '',
        lon: '',
        time_date: ''
      }])
    })
}