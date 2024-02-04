import React, { useState } from 'react'
import logoMain from '../assets/logo-main.png'
import logoMainActive from '../assets/icon-sidebar-main.png'
import iconLogOut from '../assets/icon-logout.svg'
import { sidebarLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { useGetUserInfo } from '../hooks/useGetUserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { modalLogOutOpen } from '../features/modalSlice'


const SidebarMobile = () => {
  const { name, avatar } = useGetUserInfo()
  const dispatch = useDispatch()

  return (
    <div className='sidebar-mobile'>
      <div>
        <a href="#!" aria-label='Tracketeer Link' className='sidebar-logo-link'>
          <img src={logoMain} alt="Tracketeer Logo" className='logo-sidebar-open'/>
          <img src={logoMainActive} alt="Tracketeer Logo" className='logo-sidebar-close'/>
        </a>

        {/* SIDEBAR LINKS */}
        <ul className='sidebar-links'>
          {sidebarLinks.map(link => (
            <li key={link.id} className='link-item'>
              <NavLink to={link.linkPath} className='sidebar-link'>
                <img src={link.iconSrc} alt={link.title} />
                <span>{link.title}</span>
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
        <img src={iconLogOut} alt="Log out" onClick={() => dispatch(modalLogOutOpen())} className='user-logout'/>
      </div>
    </div>
  )
}

export default SidebarMobile