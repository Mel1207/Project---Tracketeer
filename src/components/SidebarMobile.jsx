import React, { useState } from 'react'
import logoMain from '../assets/logo-main.png'
import logoMainActive from '../assets/icon-sidebar-main.png'
import iconLogOut from '../assets/icon-logout.svg'
import { sidebarLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { useGetUserInfo } from '../hooks/useGetUserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { modalLogOutOpen } from '../features/modalSlice'
import iconBack from '../assets/icon-back.svg'
import { sidebarMobileClose } from '../features/sidebarSlice'


const SidebarMobile = () => {
  const { name, avatar } = useGetUserInfo()
  const dispatch = useDispatch()
  const sidebarMobileState = useSelector(state => state.sidebar.isSideBarMobileCollapsed)

  const handleClose = () => {
    dispatch(sidebarMobileClose())
  }

  return (
    <div className={`sidebar-mobile ${sidebarMobileState ? 'sidebar-mobile-pull' : ''}`}>
      <div>
        <div className='sidebar-top'>
          <a href="#!" aria-label='Tracketeer Link' className='sidebar-logo-link'>
            <img src={logoMain} alt="Tracketeer Logo" className='logo-sidebar-open'/>
            {/* <img src={logoMainActive} alt="Tracketeer Logo" className='logo-sidebar-close'/> */}
          </a>
          <img src={iconBack} alt="back" onClick={handleClose} />
        </div>
        
        {/* SIDEBAR LINKS */}
        <ul className='sidebar-links'>
          {sidebarLinks.map(link => (
            <li key={link.id} className='link-item'>
              <NavLink to={link.linkPath} className='sidebar-link' onClick={() => dispatch(sidebarMobileClose())}>
                <img src={link.iconSrc} alt={link.title} className='default-icon'/>
                <img src={link.iconSrcActive} alt={link.title} className='active-icon'/>
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