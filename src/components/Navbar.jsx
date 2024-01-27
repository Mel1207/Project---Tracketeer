import React from 'react'
import iconHamburger from '../assets/icon-hamburger.svg'
import { NavLink } from 'react-router-dom'
import { useGetUserInfo } from '../hooks/useGetUserInfo'

const Navbar = () => {
  const { name, avatar } = useGetUserInfo()
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <img src={iconHamburger} alt="Hamburger" className='hamburger'/>

        <div className='user-account'>
          <img src={avatar} alt={name} className='user-avatar' />
          <div className='user-details'>
            <p>{name}</p>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar