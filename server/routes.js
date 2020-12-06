const express = require('express')
const db = require('./db/db.js')
const route = express.Router()

route.use(express.json())

route.get('/', (req, res) => {
  db.getPins()
    .then((response) => {
      // res.send('hey there frend!')
      return res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
  })

route.post('/form', (req, res) => {
  db.addPin(req.body)
    .then((response) => {
      return res.status(201).json(response)
    })
    .catch(err => {
      res.status(500).send('DB error' + err)
    })
})

module.exports = route