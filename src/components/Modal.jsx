import React from 'react'
import iconClose from '../assets/icon-close.svg'

const Modal = ({ children, modalTitle }) => {
  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-header">
          <h3>{modalTitle}</h3>
          <img src={iconClose} alt="Close" className='modal-close'/>
        </div>
        <div className="modal-content">
          {children}
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