const express = require('express')
const db = require('./db/db.js')
const route = express.Router()

route.use(express.json())

route.get('/map', (req, res) => {
  db.getPins()
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
  })

route.post('/form', (req, res) => {
  const { username, spotify_link, lat, lng} = req.body
  const newPin = {
    username,
    spotify_link,
    lat,
    lng
  }
  db.addPin(newPin)
    .then((response) => {
      res.status(201).json(response)
      return null
    })
    .catch(err => {
      res.status(500).send('DB error' + err)
    })
})

module.exports = route