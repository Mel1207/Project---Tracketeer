import React from 'react'
import logoMain from '../assets/logo-main.png'
import iconLogOut from '../assets/icon-logout.svg'
import { sidebarLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'


const Sidebar = () => {
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
          <div className='user-avatar'>M</div>
          <div className="account-details">
            <p>Mel John</p>
            <span>Admin</span>
          </div>
        </div>
        <img src={iconLogOut} alt="Log out" onClick={handleLogOut}/>
      </div>
    </div>
  )
}

export default Sidebar