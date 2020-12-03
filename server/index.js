
// calling the server from server.js file
const server = require('./server')


// Creating a port
const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Listening on port', port)
})