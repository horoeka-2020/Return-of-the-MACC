const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./tests/test-environment')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

xtest('getPins returns the correct number of pins', () => {
  return db.getPins(testDb)
    .then(pins => {
      return expect(pins).toHaveLength(2)
    })
})