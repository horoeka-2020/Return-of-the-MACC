const path = require('path')

const express = require('express')

const routes = require('./routes')

const server = express()


//CORS - uncomment if using them
                                           
//const cors = require ('cors')
//server.use(cors({origin: 'http://localhost:3000'}))


// Telling te server to use json (Javascript Object Notation) to pass objects as text to the server*
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/', routes)





module.exports = server

//* Could be wrong