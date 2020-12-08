import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    //changes footer colour and spacing
  <div className="is-fullwidth p-5">
    <footer className="container is-fluid">
      <Link to='/form' className="button is-rounded is-fullwidth is-family is-transparent has-text-white">Add a pin</Link>
    </footer>
  </div>
  )
}

export default Footer