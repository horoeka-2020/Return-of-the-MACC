// import React from 'react'


// export default class AddPin extends React.Component {
//     state = {
//       title: '',
//       artist: '',
//       album: ''
//     }

//     changeThis = e => {
//         this.setState({
//           ...this.state,
//           [e.target.name]: e.target.value
//         })
//       }

//       clickThis = e => {
//         const add = this.state
//         addPin(add)
//       }

//       render () {
//         const { title, artist, album} = this.state
//         return (
//           <>
//             <label>Title</label>
//             <input type="text" value={title} onChange={this.changeThis} name="title"></input>
//             <label>Artist</label>
//             <input type="text" value={artist} onChange={this.changeThis} name="artist"></input>
//             <label>Album</label>
//             <input type="text" value={album} onChange={this.changeThis} name="album"></input>
    
//             <button onClick={() => { addPin(this) }}>Add Pin</button>
//           </>
//         )
//       }
//     }

    