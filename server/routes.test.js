
const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')
// const testEnv = require('./test-environment')

// let testDb = testEnv.getTestDb()
jest.mock('../server/db/db')
const db = require('../server/db/db')

describe('GET /', () => {
  it('renders two pins', () => {
    db.getPins.mockImplementation(() => {
      return Promise.resolve([{ 
          id:1, 
          song_title:"Here comes the sun",
          song_artist:"The Beatles",
          song_album:"Abbey Road",
          username:"Caz",
          lat:"",
          lon:"",
          time_date:""
        },
        { 
          id:2,
          song_title:"Hey Jude",
          song_artist:"The Beatles",
          song_album:"The White Album",
          username:"Anna",
          lat:"",
          lon:"",
          time_date:""
        }])
    })

  return request(server)
  .get('/')
  .expect(200)
  .then(res => {
    const $ = cheerio.load(res.text)
    expect($('')).toHaveLength(2)
    return null
  })
})
})
