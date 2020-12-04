import React from 'react'
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
// import PinsList from './PinsList'
// import PinsListDetails from './PinsListDetails'
// import Home from './Home'

// import { getPins } from '../api'

// const or class
export default class App extends React.Component {
  componentDidMount () {
    this.props
  }

  render () {
    return (
      <>
        <Header />
        <h1>it's working!!</h1>
      </>
    )
  }
}

// export default connect()(App)