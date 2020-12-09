const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPins,
  addPin
}

function getPins(db = connection) {
  return db('markers').select()
}
// the above returns the pins table and selects the whole thing

function addPin(newPin, db = connection) {
  return db('markers').insert(newPin)
}
// the above returns the pins table with a newPin inserted


// function getLocation(id, db = connection) {
//   console.log(id)
//   return db('pins')
//     .where('pins.id', id)
//     .join('pin_info', 'pins.id', 'pin_info.pin_id')
//     .select('pins.id as id', 'pin_info.id', 'lat', 'lng')
//     .then(result => {
//       return {
//         id: result[0].id,
//         lat: result[0].lat,
//         lon: result[0].lon,
//       }
//     })
// }

