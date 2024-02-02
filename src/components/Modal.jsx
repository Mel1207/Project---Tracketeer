import React from 'react'
import iconClose from '../assets/icon-close.svg'
import { useDispatch } from 'react-redux'
import { modalClose, modalLogOutClose } from '../features/modalSlice'

const Modal = ({ children, modalTitle, onCloseModal }) => {
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(modalClose())
    dispatch(modalLogOutClose())
  }

  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-header">
          <h3>{modalTitle}</h3>
          <img src={iconClose} alt="Close" className='modal-close' onClick={handleCloseModal}/>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal