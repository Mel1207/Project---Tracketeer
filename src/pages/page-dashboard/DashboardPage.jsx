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


const DashboardPage = () => {
  const dispatch = useDispatch()
  const { transactions } = useGetTransactions()
  const modalState = useSelector(state => state.modal.isModalOpen)
  const [description, setDescription] = useState('') 
  const [amount, setAmount] = useState('')
  const [transactionType, setTransactionType] = useState('expense')

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
              <button className='btn btn-secondary'>Cancel</button>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </Modal>
      )}
      <Navbar />
      <Sidebar />
      <main>
        <div className="container">
          <HeaderGreet />
          <button className='btn btn-primary float-right' onClick={() => dispatch(modalOpen())}>
            Add Transaction <img src={iconPlus} alt="add transaction" />
          </button>
          <div className="card-grid">
            <SavingsCard />
            <ExpenseCard />
            <IncomeCard />
          </div>

          <div className="tables">
            <div className="table-transaction">
              <p>All Transactions</p>
              <ul>
                {transactions.map(item => (
                  <li key={item.id} style={{marginBottom: '20px'}}>
                    <h5>{item.transactionDescription}</h5>
                    <p>{item.transactionAmount}</p>
                    <p>{item.transactionType}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="table-notification">
              <p>All Notification</p>
            </div>
          </div>
        </div>  
      </main>
    </>
  )
}

export default DashboardPage