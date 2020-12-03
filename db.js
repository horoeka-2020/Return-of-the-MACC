const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports = {
  getPins,
  addPin
}

function getPins() {
  return db('pins').select()
}
// the above returns the pins table and selects the whole thing

function addPin(newPin) {
  return db('pins').insert(newPin)
}
// the above returns the pins table with a newPin inserted