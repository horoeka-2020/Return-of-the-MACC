// events
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('markers').del()
    .then(function () {
      // Inserts seed entries
      return knex('markers').insert([
        {id: 1, song: 'Big Yellow Taxi', artist: 'Joni Mitchell', album: 'Ladies of the Canyon', username: 'mg23', spotify_link: 'https://open.spotify.com/embed/track/6UkMcAA19lTdjs22jtB7o2', lat: -36.8445085, lng: 174.7659743},
        {id: 2, song: 'Harleys in Hawaii', artist: 'Katy Perry', album: 'Smile', username: 'ag14', spotify_link: 'https://open.spotify.com/embed/track/3B4etxytImrRKQgV3XHjnR', lat: -36.8558754, lng: 174.7713387},
        {id: 3, song: 'Take you dancing', artist: 'Jason Derulo', album: 'Take you dancing', username: 'cc55s', spotify_link: 'https://open.spotify.com/embed/track/59qrUpoplZxbIZxk6X0Bm3', lat: -36.8706052, lng: 174.7797501},
      ])
    })
}
