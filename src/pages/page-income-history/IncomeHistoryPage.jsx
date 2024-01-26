import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const IncomeHistoryPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          Income History
        </div>
      </main>
    </>
  )
}

export default IncomeHistoryPage