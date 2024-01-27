import React, { useState } from 'react'
import logoMain from '../assets/logo-main.png'
import iconLogOut from '../assets/icon-logout.svg'
import { sidebarLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
import { useGetUserInfo } from '../hooks/useGetUserInfo'


const Sidebar = () => {
  const { name, avatar } = useGetUserInfo()

  const { logOut } = useLogOut()
  const handleLogOut = () => {
    logOut()
  }

  return (
    <div className='sidebar'>
      <div>
        <a href="#!" aria-label='Tracketeer Link' className='sidebar-logo-link'>
          <img src={logoMain} alt="Tracketeer Logo" />
        </a>

        {/* SIDEBAR LINKS */}
        <ul className='sidebar-links'>
          {sidebarLinks.map(link => (
            <li key={link.id} className='link-item'>
              <NavLink to={link.linkPath} className='sidebar-link'>
                <img src={link.iconSrc} alt={link.title} />
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ACCOUNT DIRECTORY */}
      <div className='account-directory'>
        <div className="account-content">
          <img src={avatar} alt={name} className='user-avatar'/>
          <div className="account-details">
            <p>{name}</p>
            <span>Admin</span>
          </div>
        </div>
        <img src={iconLogOut} alt="Log out" onClick={handleLogOut} className='user-logout'/>
      </div>
    </div>
  )
}

export default Sidebar