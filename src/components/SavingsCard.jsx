import React from 'react'

const SavingsCard = ({ totalBalance }) => {
  return (
    <div className='card-savings'>
      <p>Current Savings</p>

      <div>
        <h2>{totalBalance}.00</h2>
        <p>Pesos</p>
      </div>
    </div>
  )
}

export default SavingsCard