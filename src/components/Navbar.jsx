import React from 'react'
import iconHamburger from '../assets/icon-hamburger.svg'
import { NavLink } from 'react-router-dom'
import { useGetUserInfo } from '../hooks/useGetUserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarMobileOpen, sidebarToggle } from '../features/sidebarSlice'

const Navbar = () => {
  const { name, avatar } = useGetUserInfo()
  const sidebarState = useSelector(state => state.sidebar.isSideBarCollapsed)
  const dispatch = useDispatch()
  const toggleSidebar = () => {
    dispatch(sidebarToggle())
  }

  const toggleSidebarMobile = () => {
    console.log('test')
    dispatch(sidebarMobileOpen())
  }

  return (
    <nav className={`navbar ${sidebarState ? 'navbar-sidebar-collapsed' : ''}`}>
      <div className="navbar-container">
        <img src={iconHamburger} alt="Hamburger" className='hamburger' onClick={toggleSidebar}/>
        <img src={iconHamburger} alt="Hamburger" className='hamburger-mobile' onClick={toggleSidebarMobile}/>

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