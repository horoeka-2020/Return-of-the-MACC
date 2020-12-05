import React from 'react'
import { connect } from 'react-redux'
import { getPins } from '../api/apipins'

import PinsListItem from './PinsListItem'

class PinsList extends React.Component {
  state = {
    song: '',
    artist: '',
    album: '',
    username: ''
  }

componentDidMount () {
  return getPins()
  .then((pin) => {
    console.log(pin)
    this.setState({
      pin: pin
    })
    return null
  })
}
render () {
  const { song, artist, album, username } = this.state
  return (
    <section className='container m-5'>
      <div className="columns p-5"> 
        <div className="column">
          <h3>{song}</h3>
        </div>
        <div className="column">
          <p>{artist}</p>
          <p>{album}</p>
        </div>
        <div className="column">
          <p><em>{username}</em></p>
        </div>
      </div>
      </section>
    )
  }
}
export default connect()(PinsList)

