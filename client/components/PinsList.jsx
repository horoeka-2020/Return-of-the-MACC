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
    const { song_title, song_artist, song_album, username, lat, lon, time_date } = pin[0]
    console.log(pin)
    this.setState({
      song_title: song_title,
      song_artist: song_artist,
      song_album: song_album,
      username: username,
      lat: lat,
      lon: lon,
      time_date: time_date
    })
    console.log(this.state)
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