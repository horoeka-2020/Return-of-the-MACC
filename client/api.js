import request from 'superagent'

const url = '/api/v1'

export function getPins () {
  return request
    .get(url)
    .then(response => response.body)
}