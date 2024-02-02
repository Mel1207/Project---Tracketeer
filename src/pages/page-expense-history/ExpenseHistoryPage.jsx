import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetTransactions } from '../../hooks/useGetTransactions'

const ExpenseHistoryPage = () => {
  const { transactions } = useGetTransactions()
  const expenseTransactions = transactions.filter(item => item.transactionType === 'expense')

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className='container'>
          <h3 className='page-title'>Expense history</h3>
            <div className='table'>
              <div className="table-head">
                <p>Transaction</p>
                <p>Type</p>
                <p>Date</p>
                <p>Amount</p>
              </div>
              {expenseTransactions.map(item => (
                <div key={item.id} className='table-row'>
                  <p>{item.transactionDescription}</p>
                  <p className='table-expense'>{item.transactionType}</p>
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

export default ExpenseHistoryPage