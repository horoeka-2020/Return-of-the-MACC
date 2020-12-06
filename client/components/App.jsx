import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import PinsList from './PinsList'
import AddPin from './AddPin'
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
        <Route exact path='/' component={PinsList} />
        <Route path='/form' component={AddPin} />
        <Footer />
      </>
    )
  }
}

export default connect()(App)