import React from 'react'
import { connect } from 'react-redux'

function Header () {
    return (
      <>
        <h1><span className=""></span> Drop tha beat <span className=""></span></h1>

        <p className="">Return of the MACC</p>
      </>
    )
  }
  export default connect()(Header)
