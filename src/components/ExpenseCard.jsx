import React from 'react'

const ExpenseCard = ({ totalExpense }) => {
  return (
    <div className='card-expense'>
      <p>Total Expense</p>

      <div>
        <h2>{totalExpense}.00</h2>
        <p>Pesos</p>
      </div>
    </div>
  )
}

export default ExpenseCard