import React from 'react'
import iconClose from '../assets/icon-close.svg'
import { useDispatch } from 'react-redux'
import { modalClose } from '../features/modalSlice'

const Modal = ({ children, modalTitle }) => {
  const dispatch = useDispatch()

  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-header">
          <h3>{modalTitle}</h3>
          <img src={iconClose} alt="Close" className='modal-close' onClick={() => dispatch(modalClose())}/>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal