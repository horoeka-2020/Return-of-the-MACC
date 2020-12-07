const express = require('express')
const db = require('./db/db.js')
const route = express.Router()

route.use(express.json())

route.get('/', (req, res) => {
  db.getPins()
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
  })

route.post('/form', (req, res) => {
  const { song, artist, album, username, spotify_link} = req.body
  const newPin = {
    song,
    artist,
    album,
    username,
    spotify_link
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