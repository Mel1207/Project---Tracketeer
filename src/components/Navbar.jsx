import React from 'react'
import iconHamburger from '../assets/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <img src={iconHamburger} alt="Hamburger" className='hamburger'/>

        <div className='user-account'>
          <div className='user-avatar'>M</div>
          <div className='user-details'>
            <p>Mel John</p>
            <a href="#!">Profile</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar