import requestor from './consume'

export function getPins (consume = requestor) {
  return consume('/map')
    .then(res => {
      return res.body
    })
}

export function addPins (newPin, consume = requestor) {
  return consume('/form', 'post', newPin)
    .then(res => {
      return res.body
    })
}
