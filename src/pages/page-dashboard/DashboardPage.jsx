import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import HeaderGreet from '../../components/HeaderGreet'
import SavingsCard from '../../components/SavingsCard'
import ExpenseCard from '../../components/ExpenseCard'
import IncomeCard from '../../components/IncomeCard'



const DashboardPage = () => {
  return (
    <>
      <HeaderGreet />
      <div className="card-grid">
        <SavingsCard />
        <ExpenseCard />
        <IncomeCard />
      </div>

      <div className="tables">
        <div className="table-transaction">
          
        </div>
        <div className="table-notification">

        </div>
      </div>
    </>
  )
}

export default DashboardPage