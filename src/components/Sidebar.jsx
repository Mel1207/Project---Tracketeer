import React from 'react'
import logoMain from '../assets/logo-main.png'
import iconLogOut from '../assets/icon-logout.svg'
import { sidebarLinks } from '../constants'

const Sidebar = () => {
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
              <a href={link.linkPath} className='sidebar-link'>
                <img src={link.iconSrc} alt={link.title} />
                {link.title}
              </a>
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
        <img src={iconLogOut} alt="Log out" />
      </div>
    </div>
  )
}

export default Sidebar