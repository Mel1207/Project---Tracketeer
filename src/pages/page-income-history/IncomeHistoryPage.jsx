import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import SidebarMobile from '../../components/SidebarMobile'

const IncomeHistoryPage = () => {
  const { transactions } = useGetTransactions()
  const incomeTransactions = transactions.filter(item => item.transactionType === 'income')

  return (
    <>
      <Navbar />
      <Sidebar />
      <SidebarMobile />
      <main>
        <div className='container'>
          <h3 className='page-title'>Income history</h3>
          <div className='table'>
            <div className="table-head">
              <p>Transaction</p>
              <p>Type</p>
              <p>Date</p>
              <p>Amount</p>
            </div>
            {incomeTransactions.map(item => (
              <div key={item.id} className='table-row'>
                <p>{item.transactionDescription}</p>
                <p className='table-income'>{item.transactionType}</p>
                <p className='table-date'>{item.dateTs}</p>
                <p>{item.transactionAmount}.00</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default IncomeHistoryPage