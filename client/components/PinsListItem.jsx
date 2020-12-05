import React from 'react'
import { connect } from 'react-redux'

class PinsListItem extends React.Component {

  render () {
    return (
      <div className="column">
        <p>{this.props.song}</p>
        <p>{this.props.artist}</p>
        <p>{this.props.album}</p>
        <p><em>{this.props.username}</em></p>
      </div>
    )
  }
}

export default connect()(PinsListItem)