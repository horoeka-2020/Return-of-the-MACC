import React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import { getPins } from '../api/apipins'
import Footer from './Footer'
import Header from './Header'

class Home extends React.Component {
  state = {
    pinsCoordinates: []
  }
  componentDidMount () {
    return getPins()
    .then((pinsCoordinates) => {
      this.setState({
        pinsCoordinates: pinsCoordinates
      })
    })
  }
  render() {
    const { pinsCoordinates } = this.state
    return (
      <>
      <Header />
        <Map pinsCoordinates={pinsCoordinates} />
        <Footer />
      </> 
  )
}
}
export default connect()(Home)
