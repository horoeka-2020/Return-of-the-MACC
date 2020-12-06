import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='container m-5 is-round'>
    <div className='block'>
      <h1 className='title is-1'><Link to='/form'>Add a pin</Link></h1>
    </div>
  </footer> 
  )
}

export default Footer