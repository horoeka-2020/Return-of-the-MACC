import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
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
                <div className='columns is-centered'>
                    <div className="column is-half">
                        <h1 className="py-4">Add a Pin</h1>
                        <div className="field">
                            <label>Song</label>
                            <input
                                className="input"
                                type="text"
                                name="song"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Artist</label>
                            <input
                                className="input"
                                type="text"
                                name="artist"
                                value={this.state.artist}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Album</label>
                            <input
                                className="input"
                                type="text"
                                name="album"
                                value={this.state.album}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input
                                className="input"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Spotify Link</label>
                            <input
                                className="input"
                                type="text"
                                name="spotify_link"
                                value={this.state.spotify_link}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <p className="control">
                            <button 
                                className="button is-success"
                                onClick={this.handleSubmit}>
                                Add Pin
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
            </>
          )
    }
}

export default AddPin