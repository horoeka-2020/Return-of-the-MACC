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
        <div className="is-fullwidth py-5">
          <main className="container is-fluid">
            <Header />
            <Home />
            <Route exact path='/' component={PinsList} />
            <Route path='/form' component={AddPin} />
            <Footer />
            {/* {currentPage === 'Homepage' ? <Map /> : <AddPin/>} */}
          </main>
        </div>
      </>     
    )
  }
}

export default connect()(App)