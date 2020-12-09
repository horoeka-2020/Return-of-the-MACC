import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPins } from '../api/apipins'
import Header from './Header'

class AddPin extends React.Component {
    state = {
        username: '',
        spotify_link: '',
        lat: 0,
        lng: 0
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
            <Header />
                <div className='columns is-centered'>
                    <div className="column is-half">
                       
                        <h1 className="py-4 is-size-1 has-text-white">Add a song to the map</h1>
                        
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
                        <button className="button is-medium">   
                        <span className="icon is-medium">
                        <i className="fab fa-spotify"></i>
                        </span>
                            <a target="_blank" href="https://open.spotify.com/search">
                        <label className="has-text-white"> <span>Spotify</span></label></a>
                            </button>
                        </div>
                        <div className="field">
                        <label className="has-text-white">Place spotify link here</label>
                            <input
                                className="input"
                                type="text"
                                name="spotify_link"
                                value={this.state.spotify_link}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                        <label className="has-text-white">Location: latitude</label>
                            <input
                                className="input"
                                type="text"
                                name="lat"
                                value={this.state.lat}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                        <label className="has-text-white">Location: longitude</label>
                            <input
                                className="input"
                                type="text"
                                name="lng"
                                value={this.state.lng}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <p className="control">
                            <button 
                                className="button has-background"
                                onClick={this.handleSubmit}><Link to='/map'>
                                <label className="has-text-white">Add Song</label></Link>
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
