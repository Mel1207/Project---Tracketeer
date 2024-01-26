import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          <h3>Mel John Pualon</h3>
          <p>Profile Information</p>
        </div>
      </main>
    </>
  )
}

export default ProfilePage