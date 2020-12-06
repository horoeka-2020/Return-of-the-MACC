import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer class='container m-5'>
    <div class='block'>
      <h1><Link to='/form'>Add a pin</Link></h1>
    </div>
  </footer> 
  )
}

export default Footer