import React from 'react'
import { connect } from 'react-redux'
import { getPins } from '../api/apipins'

// import PinsListItem from './PinsListItem'

class PinsList extends React.Component {
  state = {
    song_title: '',
    song_artist: '',
    song_album: '',
    username: '',
    lat: '',
    lon: '',
    time_date: ''
  }

componentDidMount () {
  return getPins()
  .then(pin => {
    this.setState({})
    return null
  })
}
render () {
  const { song_title, song_artist, song_album, username, lat, lon, time_date } = this.state
  return (
    <>
      <h3>{song_title}</h3>
        <p>{song_artist}</p>
        <p>{song_album}</p>
        <p><i>{username}</i></p>
    </>
    )
  }
}
export default connect()(PinsList)