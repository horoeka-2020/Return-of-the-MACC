import React from 'react'
// import { connect } from 'react-redux'
import Header from './Header'
import PinsList from './PinsList'
import ErrorMessage from './ErrorMessage'
// import Home from './Home'
// import { Route } from 'react-router-dom'

import { getPins } from '../api'

// const or class
export default class App extends React.Component {
  state = {
    error: null,
    pins: []
  }

  componentDidMount () {
    this.refreshList()
  }

  renderPins = (pins) => {
    this.setState({
      error: null,
      pins: pins
    })
  }

  renderError = (err) => {
    this.setState({
      error: err,
      pins: []
    })
  }

  refreshList = (err) => {
    this.setState({
      error: err
    })

    getPins()
    .then(pins => {
      this.renderPins(pins)
    })
    .catch(err => {
      this.renderError(err)
    })
  }


  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <Header />
        <h1>it's working!!</h1>
        <PinsList />
        </div>
      )
  }
}

// export default connect()(App)
