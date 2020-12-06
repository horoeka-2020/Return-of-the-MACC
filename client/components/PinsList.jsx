import React from 'react'
import { connect } from 'react-redux'
import { getPins } from '../api/apipins'

import PinsListItem from './PinsListItem'

class PinsList extends React.Component {
  state = {
    pin: []
  }

componentDidMount () {
  return getPins()
  .then((pin) => {
    console.log(pin)
    this.setState({
      pin: pin
    })
  })
}

render () {
  return (
    <section className='columns m-5'>
      {this.state.pin.map((pin) => <PinsListItem key={pin.id} pin={pin}/>)}
    </section>
    )
  }
}

// export default connect()(PinsList)
export default PinsList
