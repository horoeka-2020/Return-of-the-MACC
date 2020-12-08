import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <div className="is-fullwidth p-5">
        <header className="container is-fluid">
            <Link to='/' className="button is-blue is-rounded is-fullwidth has-text-white">Drop The Beat</Link>
        </header>
      </div>
    )
  }
  
  export default Header

  // export default connect()(Header)
