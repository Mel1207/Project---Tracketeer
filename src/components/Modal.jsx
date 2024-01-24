import React from 'react'
import iconClose from '../assets/icon-close.svg'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-header">
          <h3>New Transaction</h3>
          <img src={iconClose} alt="Close" className='modal-close'/>
        </div>
        <div className="modal-content">
          <div className="form-group">
            <p>Transaction</p>
            <input type="text" placeholder='Enter Transaction' />
          </div>
          <div className="form-group">
            <p>Type</p>
            <select id="transaction-type">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <p>Amount</p>
            <input type="number" placeholder='0.00' />
          </div>
        </div>
        <div className="modal-footer">
          <button className='btn btn-secondary'>Cancel</button>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Modal