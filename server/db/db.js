const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPins,
  addPin
}

function getPins(db = connection) {
  return db('pin_info').select()
}
// the above returns the pins table and selects the whole thing

function addPin(newPin) {
  return db('pin_info').insert(newPin)
}
// the above returns the pins table with a newPin inserted