import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
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
        <Home />
        <Footer />
        {/* {currentPage === 'Homepage' ? <Map /> : <AddPin/>} */}
      </>
    )
  }
}

export default connect()(App)