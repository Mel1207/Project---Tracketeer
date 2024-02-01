import React from 'react'

const IncomeCard = ({ totalIncome }) => {
  return (
    <div className='card-income'>
      <p>Total Income</p>

      <div>
        <h2>{totalIncome}.00</h2>
        <p>Pesos</p>
      </div>
    </div>
  )
}

export default IncomeCard