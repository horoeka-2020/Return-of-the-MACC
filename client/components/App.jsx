import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import PinsList from './PinsList'
import Map from './Map'
// import PinsListDetails from './PinsListDetails'
// import Home from './Home'

// import { getPins } from '../api'

class App extends React.Component {
  componentDidMount () {
    this.props
  }

  render () {
    return (
      <>
        <Header />
        <Route path='/' component={PinsList} />
        <Route path='/' component={Map} />
      </>
    )
  }
}

export default connect()(App)