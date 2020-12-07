import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PinsList from './PinsList'
import Map from './Map'
import AddPin from './AddPin'

function Home () {
  return (
    <div className="is-fullwidth py-5">
      <main className="container is-fluid">
        {/* <Route exact path='/' component={PinsList} /> */}
        <Route path='/' component={Map} />
        <Route path='/form' component={AddPin} />
      </main>
    </div>
  )
}
export default connect()(Home)
