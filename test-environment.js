const getDbConn = require('knex')
const testConfig = require('./server/db/knexfile')

module.exports = {
  // Test database connection
  getTestDb: () => getDbConn(testConfig)

  // Create a seperate in memory database before each test
  // In our test we can get at the database as t.context.db

  initialise: (db) => {
    return db.migrate.latest()
    .then(() => {
      return db.seed.run()
    })
  },

  //Destroy the db connection after test
    cleanup: (db) => {
      return db.destroy()
    }

    
}