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
      <Navbar />
      <Sidebar />
      <main>
        <div className="container">
          <HeaderGreet />
          <div className="card-grid">
            <SavingsCard />
            <ExpenseCard />
            <IncomeCard />
          </div>

          <div className="tables">
            <div className="table-transaction">
              <p>All Transactions</p>
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