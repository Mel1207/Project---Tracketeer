import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetTransactions } from '../../hooks/useGetTransactions'

const TransactionHistoryPage = () => {
  const { transactions } = useGetTransactions()

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          <h3>Here's your transaction history</h3>
          <div className='table'>
            <div className="table-head">
              <p>Transaction</p>
              <p>Type</p>
              <p>Date</p>
              <p>Amount</p>
            </div>
            {transactions.map(item => (
              <div key={item.id} className='table-row'>
                <p>{item.transactionDescription}</p>
                <p className={item.transactionType === 'expense' ? 'table-expense' : 'table-income'}>{item.transactionType}</p>
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

export default TransactionHistoryPage