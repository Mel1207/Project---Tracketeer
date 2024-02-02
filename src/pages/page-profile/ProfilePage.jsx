import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'

const ProfilePage = () => {
  const { name, userId, avatar } = useGetUserInfo()

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          <div className="profile-card">
            <img src={avatar} alt={name} className='avatar'/>
            <h3 className='profile-name'>{name}</h3>
            <p className='profile-role'>Admin</p>
            <div className='profile-details'>
              <span>Email: <p>feature soon...</p></span>
              <span>Enable dark mode: <p>feature soon...</p></span>
              <span>Work: <p>feature soon...</p></span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProfilePage