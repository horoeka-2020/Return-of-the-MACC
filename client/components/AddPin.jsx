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
                       
                        <h1 className="py-4 is-size-1 has-text-white">Add a Pin</h1>
                        

                        <div className="field">
                            <label className="has-text-white">Song</label>
                            <input
                                className="input"
                                type="text"
                                name="song"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label className="has-text-white">Artist</label>
                            <input
                                className="input"
                                type="text"
                                name="artist"
                                value={this.state.artist}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                        <label className="has-text-white">Album</label>
                            <input
                                className="input"
                                type="text"
                                name="album"
                                value={this.state.album}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                        <label className="has-text-white">Username</label>
                            <input
                                className="input"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                        <button className="button is-primary is-outlined">
                        <label className="has-text-white">
                        <a target="_blank" href="https://open.spotify.com/search">Select song in Spotify</a>
                            </label>
                            </button>
                        </div>
                        <div className="field">
                        <label className="has-text-white">Spotify Link</label>
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
                                className="button has-background-danger"
                                onClick={this.handleSubmit}>
                                <label className="has-text-white">Add Pin</label>
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