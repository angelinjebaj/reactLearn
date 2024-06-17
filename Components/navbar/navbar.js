import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
  <Link to ="/" className='li'>Home</Link>
  <Link to="/about" className='li'>About </Link>
  <Link to ="/contact" className='li'>Contact</Link>
</ul>
    </div>
  )
}

export default Navbar
