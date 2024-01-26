import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const ExpenseHistoryPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          Expense History
        </div>
      </main>
    </>
  )
}

export default ExpenseHistoryPage