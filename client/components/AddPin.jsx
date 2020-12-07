import React from 'react'
// import { connect } from 'react-redux'
import { addPins } from '../api/apipins'

class AddPin extends React.Component {
    state = {
        song: '',
        artist: '',
        album: '',
        username: '',
        spotify_link: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // implement submit
        const pin = this.state
        addPins(pin)
    }

    render() {
        return (
                <>
                 <div className="column">
                        <h1>Add a Pin</h1>
                        <div>
                            <h5>Song</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                //   placeholder="event title"
                                name="song"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />

                            <h5>Artist</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                name="artist"
                                value={this.state.artist}
                                onChange={this.handleChange}
                            />

                            <h5>Album</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                name="album"
                                value={this.state.album}
                                onChange={this.handleChange}
                            />
                                                                                                                                      <h5>Username</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />

                            <h5>Spotify link</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                name="spotify_link"
                                value={this.state.spotify_link}
                                onChange={this.handleChange}
                            />

                            <button
                            className="button"
                            onClick={this.handleSubmit}
                            >Add Pin</button>

                        </div>
                    </div>
                </>
             )
        }
    }
                
export default AddPin
