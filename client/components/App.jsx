import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import PinsList from './PinsList'
// import PinsListDetails from './PinsListDetails'
// import Home from './Home'

// import { getPins } from '../api'

// const or class
class App extends React.Component {
  componentDidMount () {
    this.props
  }

  render () {
    return (
      <>
        <Header />
        <Route path='/' component={PinsList} />
        <Footer />
      </>
    )
  }
}

export default connect()(App)