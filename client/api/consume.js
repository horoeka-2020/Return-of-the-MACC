import request from 'superagent'

const url = '/api/v1'

export default function consume (endpoint, method = 'get', data = {}) {
  const payLoadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](url + endpoint)
    .set(headers)[payLoadMethod](data)
    .then(res => res)
    .catch(err => {
      throw new Error(err.response.body.error)
    })
}