
const request = require('supertest')

const server = require('./server')
const db = require('../server/db/db')

// let testDb = testEnv.getTestDb()
jest.mock('../server/db/db')

const mockPins = [{
          id:1, 
          song_title:"Here comes the sun",
          song_artist:"The Beatles",
          song_album:"Abbey Road",
          username:"Caz",
          lat:"",
          lon:"",
          time_date:""
        },{ 
          id:2,
          song_title:"Hey Jude",
          song_artist:"The Beatles",
          song_album:"The White Album",
          username:"Anna",
          lat:"",
          lon:"",
          time_date:""
}]

describe('GET /api/v1', () => {
  it('responds with pins on resbody', () => {
    db.getPins.mockImplementation(() => Promise.resolve(mockPins))
    return request(server)
    .get('/api/v1')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(2)
      return null
    })
  })
  it('responds with 500 and correct error object on DB error', () => {
    db.getPins.mockImplementation(() => Promise.reject(
      new Error('mock DB error')
    ))
    return request(server)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(res => {
        expect(res.body.error).toBe('mock DB error')
        return null
      })
  })
})

