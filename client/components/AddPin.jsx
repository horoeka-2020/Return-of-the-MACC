import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPins } from '../api/apipins'

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
                <div className='columns is-centered'>
                    <div className="column is-half">
                       
                        <h1 className="py-4 is-size-1 has-text-white">Add a Pin</h1>
                        
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
                        <div className="">
                        <button className="button is-primary is-outlined">
                        <label className="has-text-white">
                            <a target="_blank" href="https://open.spotify.com/search">Click here to get Spotify link</a>
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
                                className="button has-background-danger"
                                onClick={this.handleSubmit}><Link to='/map'>
                                <label className="has-text-white">Add Pin</label></Link>
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
