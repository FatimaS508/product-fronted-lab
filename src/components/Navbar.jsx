import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home  | </Link>
            <Link to='/products'>All products  | </Link>
            <Link to='/products/create'>Create new product</Link>
        </nav>
    </div>
  )
}

export default Navbar