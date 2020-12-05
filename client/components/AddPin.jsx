import React from 'react'

class AddPin extends React.Component {
    state = {
        title: '',
        artist: '',
        album: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // implement submit
    }

    render() {
        return (
                <>
                 <div className="column">
                        <h1>Add a Pin</h1>
                        <form>
                            <h5>Title</h5>
                            <input
                                //   className="input is-normal"
                                type="text"
                                //   placeholder="event title"
                                name="title"
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

                        </form>
                    </div>
                </>
             )
        }
    }
                
export default AddPin
