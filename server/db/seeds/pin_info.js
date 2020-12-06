
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pin_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('pin_info').insert([
        {
          id: 1, 
          pin_id: 1, song: 'Big Yellow Taxi', 
          artist: 'Joni Mitchell', 
          album: 'Ladies of the Canyon', 
          username: 'mg23', 
          spotify_link: 'https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC'
        },
        {
          id: 2, 
          pin_id: 2, 
          song: 'Harleys in Hawaii',
          artist: 'Katy Perry',
          album: 'Smile',
          username: 'ag14',
          spotify_link: 'https://open.spotify.com/playlist/37i9dQZF1DWX37VefS7A1r'
        },
        {
          id: 3,
          pin_id: 3, 
          song: 'Take you dancing', 
          artist: 'Jason Derulo',
          album: 'Take you dancing',
          username: 'cc55s',
          spotify_link: 'https://open.spotify.com/playlist/37i9dQZF1DX9xBD5FRuUu9'
        },
      ]);
    });
};
