// events
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('markers').del()
    .then(function () {
      // Inserts seed entries
      return knex('markers').insert([
        {id: 1, song: 'Return of the Mack', artist: 'Mark Morrison', album: 'Ladies of the Canyon', username: 'Maria', spotify_link: 'https://open.spotify.com/embed/track/3jDdpx9PMlfMBS5tOBHFm9', lat: '-36.8445085', lng: '174.7659743'},
        {id: 2, song: 'Ive had the time of my life', artist: 'Various Artists', album: 'Smile', username: 'Caroline', spotify_link: 'https://open.spotify.com/embed/track/6W7ztLBiRzBN46ZaPAcQ0F', lat: '-36.8558754', lng: '174.7713387'},
        {id: 3, song: 'Bye Bye Bye', artist: 'Nsync', album: 'No string', username: 'Anna', spotify_link: 'https://open.spotify.com/embed/track/4r8lRYnoOGdEi6YyI5OC1o', lat: '-36.8706052', lng: '174.7797501'},
        // final song to be added for the demo
        // {id: 4, song: 'Graduation Friends forever', artist: 'Vitamin C', album: 'One hit wonder', username: 'Claire', spotify_link: 'https://open.spotify.com/embed/track/45V4Mk7vZV2b9JfSWuUX9m'
      ])
    })
}
