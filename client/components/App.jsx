import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import PinsList from './PinsList'
import Home from './Home'
import AddPin from './AddPin'

// import { getPins } from '../api'

class App extends React.Component {
  componentDidMount () {
    this.props
  }

  render () {
    return (
      <>
        <Header />
        {/* May need to put home in react route */}
        <Home />
        <Route exact path='/' component={PinsList} />
        {/* <Route path='/' component={Home} /> */}
        <Route path='/form' component={AddPin} />
        <Footer />
      </>
    )
  }
}

export default connect()(App)