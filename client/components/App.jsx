import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Home from './Home'
import AddPin from './AddPin'
import Welcome from './Welcome'

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
            <Route exact path='/' component={Welcome} />
            <Route path='/map' component={Home} />
            <Route path='/form' component={AddPin} />
          </main>
        </div>
      </>     
    )
  }
}

export default connect()(App)