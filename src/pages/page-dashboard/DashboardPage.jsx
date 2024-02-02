import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { modalClose, modalOpen } from '../../features/modalSlice'
import { useAddTransaction } from '../../hooks/useAddTransaction'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Modal from '../../components/Modal'
import HeaderGreet from '../../components/HeaderGreet'
import SavingsCard from '../../components/SavingsCard'
import ExpenseCard from '../../components/ExpenseCard'
import IncomeCard from '../../components/IncomeCard'
import iconPlus from '../../assets/icon-plus.svg'
import iconNoNotif from '../../assets/icon-no-notifications.svg'
import iconNoTransaction from '../../assets/icon-no-transactions.svg'


const DashboardPage = () => {
  const dispatch = useDispatch()
  const { transactions, transactionsTotal } = useGetTransactions()
  const modalState = useSelector(state => state.modal.isModalOpen)
  const sidebarState = useSelector(state => state.sidebar.isSideBarCollapsed)
  const [description, setDescription] = useState('') 
  const [amount, setAmount] = useState('')
  const [transactionType, setTransactionType] = useState('expense')
  const { balance, income, expense } = transactionsTotal
  const { addTransaction } = useAddTransaction()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      transactionDescription: description,
      transactionAmount: amount,
      transactionType: transactionType
    })

    dispatch(modalClose())
    setDescription('')
    setAmount('')
    setTransactionType('expense')
  }

  return (
    <>
      {modalState && (
        <Modal modalTitle='New Transaction'>
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="form-group">
                <p>Transaction Name</p>
                <input type="text" placeholder='Enter Transaction' onChange={e => setDescription(e.target.value)}/>
              </div>
              <div className="form-group">
                <p>Type</p>
                <select id="transaction-type" onChange={e => setTransactionType(e.target.value)} value={transactionType}>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <div className="form-group">
                <p>Amount</p>
                <input type="number" placeholder='0.00' onChange={e => setAmount(e.target.value)}/>
              </div>
            </div>
            <div className="modal-footer">
              <button className='btn btn-secondary' type='button' onClick={() => dispatch(modalClose())}>Cancel</button>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </Modal>
      )}
      <Navbar />
      <Sidebar />
      <main className={sidebarState ? 'main-sidebar-collapsed' : ''}>
        <div className="container">
          <HeaderGreet />
          <button className='btn btn-primary float-right' onClick={() => dispatch(modalOpen())}>
            <span>Add Transaction</span><img src={iconPlus} alt="add transaction" />
          </button>
          <div className="card-grid">
            <SavingsCard totalBalance={balance}/>
            <ExpenseCard totalExpense={expense}/>
            <IncomeCard totalIncome={income}/>
          </div>

          <div className="tables">
            <div className="table-transaction">
              <p className='table-title'>All Transactions</p>
              <div className='table-head'>
                <p>Transaction</p>
                <p>Type</p>
                <p>Amount</p>
              </div>
              <ul className={transactions <= 0 ? 'empty-table' : 'transaction-list'}>
                {transactions.map(item => (
                  <li key={item.id}>
                    <p>{item.transactionDescription}</p>
                    <p className={`${item.transactionType === 'expense' ? 'expense' : 'income'}`}>{item.transactionType}</p>
                    <p>{item.transactionAmount}.00</p>
                  </li>
                ))}
                {transactions <= 0 && (
                  <div className='empty-transactions'>
                    <img src={iconNoTransaction} alt="no transactions" />
                    <span>No transactions yet</span>
                  </div>
                )}
              </ul>
            </div>
            <div className="table-notification">
              <p className='title'>All Notifications</p>
              <ul className={transactions <= 0 ? 'empty-table' : ''}>
                {transactions.map(item => (
                  <li key={item.id} className='item-notification'>
                    <div>
                      {item.transactionType === 'expense' ? ( <p>You got an expense activity 😢</p>) : (<p>You got income activity 😊</p>)}
                      <p className='date'>{item.dateTs}</p>
                    </div>
                    <p className={`amount ${item.transactionType === 'expense' ? 'expense-type' : 'income-type'}`}>{item.transactionType === 'expense' ? (
                      <span>-{item.transactionAmount}</span>
                    ) : (
                      <span>+{item.transactionAmount}</span>
                    )}.00</p>
                  </li>
                ))}
                {transactions <= 0 && (
                  <div className='empty-notifications'>
                    <img src={iconNoNotif} />
                    <span>No notifications yet</span>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>  
      </main>
    </>
  )
}

export default DashboardPage