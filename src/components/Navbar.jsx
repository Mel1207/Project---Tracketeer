import React from 'react'
import iconHamburger from '../assets/icon-hamburger.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <img src={iconHamburger} alt="Hamburger" className='hamburger'/>

        <div className='user-account'>
          <div className='user-avatar'>M</div>
          <div className='user-details'>
            <p>Mel John</p>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar