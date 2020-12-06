import requestor from './consume'

export function getPins (consume = requestor) {
  return consume('/')
    .then(res => {
      return res.body
    })
}

export function addPins (consume = requestor) {
  return consume('/')
    .then(res => {
      return res.body
    })
}