import request from 'superagent'

const url = 'http://localhost:3000/api/v1'

export function getPins () {
  return request
    .get(url)
    .then(response => response.body)
}