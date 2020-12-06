
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pins').del()
    .then(function () {
      // Inserts seed entries
      return knex('pins').insert([
        {
          id: 1, 
          image: 'images/marker-yellow.png', 
          lat: 1425,
          lng: -1335
        },
        {
          id: 2, 
          image: 'images/marker-blue.png', 
          lat: 1425, 
          lng: -1335
        },
        {
          id: 3,
          image: 'images/marker-red.png',
           lat: 1425,
          lng: -1335
        }
      ]);
    });
};
