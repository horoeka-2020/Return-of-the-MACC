import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
// import Home from './Home'
// import { Route } from 'react-router-dom'

// const or class
const App = () => (
  <div>
    <Route path='/' render={() => { return <Header/> }}/>
  </div>
)

export default connect()(App)
